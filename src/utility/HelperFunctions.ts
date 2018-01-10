export function branchPrefixToSemVerString(branch: string) {
    const branchPrefix = branch.split(/(.+)\//)[1];
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