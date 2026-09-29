# OpenCode V2 plugin template

Start a new OpenCode V2 plugin with TypeScript, mise, linting, CI, and a
release workflow. The sample plugin registers a `greeting` tool.

## Create a plugin

1. Use this GitHub repository as a template.
2. Change `name`, `description`, `private`, `engines`, and package metadata in
   `package.json`. Set `private` to `false` when ready to publish.
3. Change the plugin `id` and replace the sample tool in `src/index.ts`.
4. Run `npm install --package-lock-only`, then `mise run install` and
   `mise run check`.
5. Install the package in OpenCode with the `plugins` list in `opencode.jsonc`.

OpenCode V2 reads the default export's `id` and `setup()`. See the
[official V2 plugin guide](https://opencode.ai/v2/docs/build/plugins/).

## Shared configuration

The CI, release workflow, mise tools, and lint configs are copied from the
[organization sync catalog](https://github.com/smykla-skalski/.github/tree/main/sync).
Smyklot proposes later catalog changes as pull requests. Select `base`,
`typescript`, and `opencode-plugin` profiles for this repository. Common mise
tools and lint tasks live in `mise/conf.d/00-shared.toml`; package-specific
tasks live in `mise.toml`.

## Publishing

The release workflow checks the tag against `package.json`, requires the tag
to descend from `main`, and runs the full check before publishing. It runs
`npm publish --dry-run` until `NPM_PUBLISH_ENABLED=true` is set for the repo.
Before enabling publication, configure an npm trusted publisher for this
repository, `.github/workflows/publish.yml`, and the `npm` environment.
