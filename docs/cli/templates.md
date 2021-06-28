# Templates

#### Description
`A collection of commands to create and manage mldock container templates.`

This collection of commands helps to configure your CLI for development. It includes setting up Authentication in-line with cloud vendor command line tools and also provides an approach to set static environment variables such as those required by these cloud vendor CLI tools.

## Create

```bash
usage: mldock templates create [--dir <path>] [--name <text>] [--out <text>]
```

#### Description
`Pull docker container image from Image Registry.`

#### Options

`--dir` path to MLDOCK directory.

`--name` name of the container to write.

`--out` Path to location where template should be written. (Only supports local paths).

