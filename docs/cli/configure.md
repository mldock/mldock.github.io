# Configure

#### Description
`A collection of commands to set up your CLI configuration.`

This collection of commands helps to configure your CLI for development. It includes setting up Authentication in-line with cloud vendor command line tools and also provides an approach to set static environment variables such as those required by these cloud vendor CLI tools.

## Local

```bash
usage: mldock configure local
```

#### Description
`Used to configure the local CLI commands. Starts a prompt to help user configure their local CLI.`

## Templates

```bash
usage: mldock configure templates
```

#### Description
`Used to configure the templates server configurations.`

::: tip
Supports using templates either in local file-system or in remote github repository.
:::

## Reset

```bash
usage: mldock configure reset [--config-name <text>]
```

#### Description
`Reset/remove any or all of the configurations set in the CLI.`
