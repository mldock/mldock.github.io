# Core Concepts

To achieve our goal of **"build local, deploy everywhere"** we strove to provide a rich set of tooling, modules and an extensible design system that connected the desperate parts of machine learning in production. Even leveraging docker these set of tasks were tricky and naunced depending on what kind of algorithm and where we planned to deploy it.

In our experience, getting machine learning to production meant solving the following challenges:

![mldock-core-functions](/images/mldock-core-functions.png)

As MLDOCK is a docker-based tool, it solves the these challenges by leveraging the standard docker API's (build, run, etc). Ofcourse the most powerful of the docker functionality is the ability to encapsulate everything an application needs to run in to a single image ie. providing and running scripts, deploying a server to deploy your code, passing parameters to scripts through environment variables and command line arguments. To satisfy the rest of the requirements and bring it all together, MLDOCK provides a design system for [container life-cycle management](./coreConcepts.html#container-life-cycle-management).

## Container Life-Cycle Management

Similar to how your training script describes the steps taken to train a new machine learning model, a container has life-cycle or set of steps that define when and how certain tasks should be done. A typical container life-cycle could comprise of:

![mldock-container-lifecycle-management](/images/mldock-container-lifecycle-management.png)

We call it a design system because at it's core we provide a base environment class that can be inherited and extended. Allowing you to build new life-cycles for your requirements, including any new cloud platforms and just about any additional API calls and pythonic code.

## Supported Life-Cycles

Currently supports we support to life-cycle management types out of the box, namely:
1. `Environment()` module based life-cycle management system
2. `Asset.py` scripted life-cycle management system

::: tip
For MLDOCK-based containers both the `Environment()` module and `Assets.py` are provided out the box. By default all they do is set up the appropriate container environment and file-system, but they can be extended to manage machine learning assets, provide platform specific integrations and run clean up tasks on the containers.

:rocket: The possiblities are almost endless.
:::


##### Environment() module

This extends the base environment and adds special environment variables to manage the life-cycle stages. Users can define specific environment variables with prefixes that can be automatically discovered at container set up. There really two types of model assets, INPUT - downloaded from blob storage to training instance at task startup and OUTPUT - uploaded back to blob storage no task completion.

| **ENV VAR Prefix Regex** | **Use Case** |
|--|--|
| `INPUT_CHANNEL_.*` | Providing input assets for your model container runtime, e.g. Providing training data stored in s3 for your model, `INPUT_CHANNEL_TRAIN=s3://bucket/path/to/directory/containing/data` |
| `INPUT_MODEL_CHANNEL_.*` | Providing a pre-trained model or previously trained model checkpoint for container runtime, e.g. If stored in s3 this could be: `INPUT_MODEL_CHANNEL_RESNET=s3://bucket/path/to/directory/containing/resnet/model` |
| `OUTPUT_CHANNEL_.*` | Instructing mldock where upload resulting assets from training completion, e.g. If using s3 as your remote it could look like this: `INPUT_CHANNEL_TRAIN=s3://bucket/path/to/directory/to/upload/output/data` |
| `OUTPUT_MODEL_CHANNEL_.*` | Instructing mldock where upload completed or trained model assets on training completion, e.g. If using s3 as your remote it could look like this: `OUTPUT_MODEL_CHANNEL_MYMODEL=s3://bucket/path/to/directory/containing/mymodel/model` |

::: tip
Please note in the local CLI all environment variables provided in the `mldock.json` configuration are prefixed with `MLDOCK_` before being passed in to the container environment. E.g. Say you wanted to pass a flag to disable CSV headers, called `HEADERS=false`, finding them in the MLDOCK container would mean looking for `MLDOCK_HEADERS`. This just makes sure that ENV VARS for both MLDOCK Environment Variables and the Cloud Platform (Sagemaker, etc) Environment Variables can coexist.
:::

##### Asset.py script

`Assets.py` is a script provided to define your container life-cycles and instantiate your environment and other shared assets for training or prediction tasks.

::: tip
As an advantage of this `Assets.py` design, when you create your container life-cycles by extending the base environment you can use python to set out any additional tasks used during either `startup` or `cleanup` steps which are called before your script and on final after your script execution.
:::
