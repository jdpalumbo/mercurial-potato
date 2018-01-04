import { SemVer } from "semver";
import * as c from "commander";
import { createParser } from "./Factories";


class Application {
    public static bootstrap() {
        const command: c.CommanderStatic = c;

        command.version(process.env.npm_package_version)
            .command("increment <version> <file> <branch>")
            .action(Application.increment);

        command.parse(process.argv);
    }

    public static increment(file: string, branch: string) {
        const currentVersion  = createParser(file).parse().version;

        const semver = new SemVer(currentVersion);
         console.log(semver.inc(branchPrefixToSemVerString(branch)));

      /*   semver = new SemVer(semver.raw);

         console.log(semver.inc("prerelease", "beta"));*/


      // npms-shrinkwrap
    }
}

export function branchPrefixToSemVerString(branch: string) {
    const branchPrefix = branch.split(/(.+)\//)[1];
    console.log(branchPrefix);
    switch (branchPrefix) {
        case "release":
        case "feature":
        case "minor":
            return "minor";
        case "breaking-release":
        case "breaking-feature":
        case "major":
            return "major";
        case "patch":
        case "hotfix":
            return "patch";
        case "pre-release":
        case "pre-feature":
        case "pre-minor":
            return "preminor";
        case "pre-breaking-release":
        case "pre-breaking-feature":
        case "pre-breaking-major":
            return "premajor";
        case "pre-patch":
        case "pre-hotfix":
            return "prepatch";
        default:
            throw new Error("Unsupported branch name");
    }
}

Application.bootstrap();