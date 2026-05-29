const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const { defineConfig } = require("@anolilab/lint-staged-config");

// This is a template repository: the root package.json "name" is intentionally
// left as the unfilled mustache placeholder "{{ ORGANIZATIONS }}" until a user
// scaffolds the project (see README "Getting Started").
//
// @anolilab/lint-staged-config's defineConfig() calls parsePackageJsonSync on the
// root package.json, which runs normalize-package-data. normalize-package-data
// hard-throws "Invalid name" on a name that is not a valid npm package name, and
// the template placeholder is not valid. That throw happens at config-load time and
// blocks every commit (the pre-commit hook runs lint-staged).
//
// We must not replace the placeholder with a real name. So, only while the name is
// still an unfilled placeholder, we build the lint-staged config against a temporary
// directory that holds a copy of package.json with a valid placeholder name. The
// real package.json on disk is never modified, and once a user fills in the
// placeholder this branch is skipped and defineConfig() runs against the repo
// directly.
const PLACEHOLDER_NAME_PATTERN = /\{\{\s*[A-Za-z0-9_]+\s*\}\}/u;

const buildConfig = () => {
    const packageJsonPath = path.join(process.cwd(), "package.json");
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

    if (typeof packageJson.name !== "string" || !PLACEHOLDER_NAME_PATTERN.test(packageJson.name)) {
        return defineConfig();
    }

    const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "lint-staged-config-"));

    // Keep every other field (dependencies, packageManager, ...) so tool and
    // package-manager detection behave exactly as they would for the real repo;
    // only the invalid name is swapped for a normalizable placeholder.
    fs.writeFileSync(
        path.join(temporaryDirectory, "package.json"),
        JSON.stringify({ ...packageJson, name: "template-placeholder" }),
    );

    return defineConfig({ cwd: temporaryDirectory });
};

module.exports = buildConfig();
