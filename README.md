<p align="center">
  Add your <em>motivational</em> tagline here.
</p>

<br />

<p align="center">
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#why"><strong>Why?</strong></a> ·
  <a href="docs"><strong>Documentation</strong></a> ·
  <a href="docs/contributing.md"><strong>Contributing</strong></a>
</p>

<br />

## Getting Started

Use the following steps when first using this template.

- Find and replace `anolilab/node-mono-library-template` with `user/repo` across the whole project.
- Replace `<< TEMPLATE NAME >>` in the `LICENSE` file with the name of your choosing.
- Replace the template package in the packages folder with a package of your choosing.
- For automatic publishing add your npm token to your [github repo secrets](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) with the name `SEMANTIC_RELEASE_GITHUB_NPM_PACKAGE_TOKEN`.
- For automatic publishing add your github token to your [github repo secrets](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) with the name `SEMANTIC_RELEASE_GITHUB_TOKEN`.

<br />

## Why

I've created this template primarily for my work, to prevent from constantly reinventing the wheel when starting a new project.
I've often had ideas and then delayed because the pain of starting from scratch is too high. This toolkit hopefully helps to reduce the friction.

This template repo comes with the following tools:

- [`yarn`](https://yarnpkg.com/) monorepo.
- [`preconstruct`](https://preconstruct.tools/) - Automated builds and great support for JS tooling.
- [`TypeScript`](https://www.typescriptlang.org/) - For typesafe code, great editor support and simpler refactoring.
- [`eslint`](https://eslint.org/) - for code linting.
- [`prettier`](https://prettier.io/) - for code formatting.
- [`babel`](https://babeljs.io/) - used by preconstruct for the compilation of code and macros.
- [`semantic-release`](https://github.com/semantic-release/semantic-release/) - for automating releases to GitHub and NPM.
- [`GitHub Actions`](https://github.com/features/actions) - as the primary continuous integration (deployment) tool.
- [`husky`](https://github.com/typicode/husky) - for git hooks.
- [`lint-staged`](https://github.com/okonet/lint-staged) - for automated precommit checks.

<br />
