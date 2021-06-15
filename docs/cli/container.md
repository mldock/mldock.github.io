# Container

#### Description
`Container project tools for creating new templates, updating and initializing new containers.`

## Initialize

```bash
usage: mldock container init [--dir <path>] [--no-prompt] 
                         [--template <path>] [--container-only]
                         [--testing-framework] [--service]
```

#### Description
`Tnitialize MLDOCK enabled container`

#### Options

`--dir` Path to MLDOCK container project directory.

`--template` Path to MLDOCK supported container template.

`--no-prompt` *(Optional)* Flag which tells MLDOCK to run init process non-interactively.

`--container-only` *(Optional)* Flag which tells MLDOCK to only initialize or update the container code scripts.

`--testing-framework` *(Optional)* Selects which container image varient to run container as.

`--service` *(Optional)* Selects which stage to run docker container in.

::: tip
MLDOCK is streamlined for building new projects from standard templates. Think about Starting new projects based
on standard templates which could include using your preferred server, or special platform requirements like boto3 or gcloud and so on.
:::

::: details
Expects an MLDOCK supported container template. See [Create Template](./container.html#create-template)

Using an available MLDOCK template such as:

```./my_templates/awesome-template```

and running:

```mldock container init --dir=awesome-project --template=./my_templates/awesome-template```

Will create your new project based on an previous template or project

:::


## Create Template

```bash
usage: mldock container create_template [--dir <path>] [--name <text>]
                                    [--out <path>]
```

#### Description
`Create a MLDOCK enabled container template.`

`Tnitialize MLDOCK enabled container`

#### Options

`--dir` Path to MLDOCK container project directory.

`--name` Name of new template to create.

`--out` Path to save MLDOCK container template to.

::: details
Given 

```mldock --dir=my-container-project --name=awesome-template --out=./my_templates```

Would yield a MLDOCK template 

```./my_templates/awesome-template```

To create a new project from your template see [Initialize Project](./container.html#initialize).
:::

## Update

```bash
usage: mldock container update [--dir <path>]
```

#### Description
`Update MLDOCK container configuration.`

`--dir` Path to MLDOCK container project directory.


## Summary

```bash
usage: mldock container summary [--dir <path>]
```

#### Description
`Show summary for MLDOCK container.`

`--dir` Path to MLDOCK container project directory.
