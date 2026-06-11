let requiredVersion = require("node:fs").readFileSync(".nvmrc", { encoding: "utf8" }).trim();

if (!requiredVersion.includes("v")) {
    requiredVersion = `v${requiredVersion}`;
}
// eslint-disable-next-line dot-notation
if (process.env["SKIP_CHECK"] !== undefined) {
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(0);
}

if (!(requiredVersion.split(".")[0] <= process.version.split(".")[0])) {
    // eslint-disable-next-line no-console
    console.error(`[!] This project requires Node.js ${requiredVersion}, current version is ${process.version}`);

    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1);
}

// Enforce pnpm as the package manager. We detect the running package manager
// directly instead of using "npx only-allow pnpm": npx resets the environment to
// an npm context, and pnpm v11 no longer sets npm_config_user_agent during the
// preinstall lifecycle, so the old guard failed even when pnpm triggered the install.
// npm_execpath reliably points at the package manager that started the install.
// eslint-disable-next-line dot-notation
const userAgent = process.env["npm_config_user_agent"] || "";
// eslint-disable-next-line dot-notation
const execPath = process.env["npm_execpath"] || "";
const isPnpm = userAgent.startsWith("pnpm") || execPath.includes("pnpm");

if (!isPnpm) {
    // eslint-disable-next-line no-console
    console.error(
        '[!] Use "pnpm install" for installation in this project. If you don\'t have pnpm, install it via "npm i -g pnpm". For more details, go to https://pnpm.io/',
    );

    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1);
}
