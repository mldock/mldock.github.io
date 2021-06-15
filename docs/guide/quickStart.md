# Getting Started Quickly

MLDOCK is built for getting started quickly. The command line tool comes with helpful boillerplate templates that will get you started developing a production machine learning container image really quickly.

To get started creating your first MLDOCK ready container image do the following:

## Getting Started

## Set up your environment

1. (Optional) Use virtual environment to manage dependencies.
2. Install `dotenv` to easily manage environment.

```
pip install --user python-dotenv[cli]
```

::: tip
dotenv allows configuring of environment through the `.env` file. MLDock uses ENVIRONMENT VARIABLES in the environment to find your `DOCKER_HOST`, `DOCKERHUB` credentials. To find out more check out [python-dotenv](https://pypi.org/project/python-dotenv/)
:::

3. Create an .env with the following:

``` .env

# for windows and if you are using WSL1
DOCKER_HOST=tcp://127.0.0.1

# for WSL2 and linux (this is default and should work out of the box)
# but for consistency, set this dockerhost

DOCKER_HOST=unix://var/run/docker.sock
```

::: tip
Now to switch environments just use dotenv as follows:

```
dotenv -f "/path/to/.env" run mldock local build --dir <my-project-path>
```
:::


## Overview of MLDock command line

Check out the [mldock command line reference](../cli)

## Create your first container image project
1. Install MLDock

The pip install is the only supported package manager at present. It is recommended that you use an environment manager, either virtualenv or conda will work.

```bash
pip install mldock[cli]
```

2. Create an empty directory

```bash
mkdir my_ml_container
```

2. Initialize or create your first container

You will see a some of prompts to set up container.

```bash
mldock container init --dir my_ml_container
```

::: tip
Just hit Return/Enter to accept all the defaults.
:::

3. Build your container image locally

```bash
mldock local build --dir my_ml_container
```

4. Run your training locally

```bash
mldock local train --dir my_ml_container
```

5. Run your training locally

```bash
mldock local deploy --dir my_ml_container
```

6. Test your container is working correctly

```bash
mldock local predict --payload my_ml_container/payload.json
```

## Putting your model in the cloud

#### Push to Dockerhub

1. Add the following to `.env`

```
DOCKERHUB_USERNAME=<your/user/name>
DOCKERHUB_PASSWORD=<your/dockerhub/password>
DOCKERHUB_REGISTRY=https://index.docker.io/v1/
DOCKERHUB_REPO=<your/user/repo/name>
```

2. Push your container to dockerhub

```bash
mldock registry push --dir my_ml_container --provider dockerhub --build
```
::: tip
The flags allow you to stipulate configuration changes in the command.
`--build` says build the image before pushing. This is required initially since the dockerhub registry will prefix your container name with your repository name. `--provider` tells mldock to authenticate to dockerhub and push the container there. In addition to `DockerHub`, both `AWS ECR` & `GCP GCR` are also supported. For more information, check out [Initialize a new container from Template](../cli/registry.html).
:::


::: tip
MLDOCK's power and versatility lie in using templates to intialize new container image projects quickly. Either use the default container options provided or you can even bring your own. For more information, check out [Initialize a new container from Template](../cli/container.html#initialize).
:::


