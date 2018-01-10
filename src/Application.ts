import { SemVer } from "semver";
import * as c from "commander";
import { branchPrefixToSemVerString } from "./utility/HelperFunctions";
import { ProjectType } from "./Types";
import { createUpdateStrategy } from "./Factories";


class Application {
    public static bootstrap() {
        const command: c.CommanderStatic = c;

        command.version(process.env.npm_package_version)
            .command("increment <version> <type> <branch>")
            .action(Application.increment);

        command.parse(process.argv);
    }

    public static increment(version: string, type: ProjectType, branch: string) {
        const semver = new SemVer(version);

        if (version.search("-") !== -1) {
            semver.inc("prerelease");
        } else {
            semver.inc(branchPrefixToSemVerString(branch));
        }
        console.log(semver);

        const updateStrategy = createUpdateStrategy(type, semver.raw);
        updateStrategy.execute();

    }
}


Application.bootstrap();