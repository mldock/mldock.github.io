# Introducing MLDOCK :tada:

As Data Scientists, docker can be both a huge enabler and a huge headache. And if you're developing machine learning with a goal of deploying to production, you might find that MLOps and Data Ops take up a huge chunk of your time.

Questions like .. "Which server, where to serve, how to maintain the code, how to maintain the model..." become huge set of hurdles to overcome. Nevermind the challenges of validating experiments, analyzing performance and generating insights for better algorithms. :microscope:

That is why we built MLDOCK. **To support the development of machine learning and enable you to get more models to production, faster and easier**.
AT MLDOCK our goal is to provide tools that help you **"Build local, Deploy everywhere"**. :whale:, so that you:

- :heavy_check_mark: Spend more time validating :balance_scale:, experimenting :alembic: and getting new features in to production :
- :x: lose far less hours :stopwatch: struggling with bash scripts
- :heavy_check_mark: Combine MLDOCK with any open-source platform or tool :hammer: to achieve your Machine learning goals :dart:.
- :x: lose far less energy :zap: wrangling your machine learning assets.
- :heavy_check_mark: Think less about docker :thinking:, push :arrow_up: :cloud: more models to production.
- :x: use far less effort :muscle: converting development code in to code that runs in production.

## Where does MLDOCK fit in?

Below are the typical components of the production machine learning workflow. 

![ml-development-workflow](/images/ml-development-workflow.png)

MLDOCK focuses on the problems associated with building an ML container and deploying it. This is achieved by providing a development environment where you can iterate in developing the training and prediction code. And then when you're happy, MLDOCK provides tooling to build and push your MLDOCK model container to the cloud container registry of your choice.

![ml-development-workflow](/images/ml-development-workflow-mldock-fits-in.png)

MLDOCK supports this movev from build to deploy by providing:
1. Quick start container templates (red)
2. Docker-based development (blue)
3. Cloud SDK enabled to interact with cloud registry (yellow)

![mldock features development phase](/images/mldock-features-development-phase.png)

A key thing to note is that development (shown blue) is an iterative process. Where tweaking your scripts to work may mean building and running many times. But no worries, MLDOCK is here to make it as painless as possible.

## Develop locally, deploy Everywhere

We focused on **build local first approach**. Starting with a command line tool that uses the docker engine and tools but packs in ml focused conveniences so you don't have to write any new bash commands and code.

![build-with-mldock](/images/build-with-mldock-fully-featured.png)
