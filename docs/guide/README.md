# Introducing MLDOCK :tada:

As Data Scientists, docker can be both a huge enabler and a huge headache. And if you're developing machine learning with a goal of deploying to production, you might find that MLOps and Data Ops take up a huge chunk of your time.

Questions like .. "Which server, where to serve, how to maintain the code, how to maintain the model..." become huge set of hurdles to overcome. Nevermind the challenges of validating experiments, analyzing performance and generating insights for better algorithms. :microscope:

That is why we built MLDOCK. **To support the development of machine learning and enable you to get more models to production, faster and easier**.
AT MLDOCK aour goal is to provide tools that help you **"Build local, Deploy everywhere"**. :whale:, so that you:

- :heavy_check_mark: Spend more time validating :balance_scale:, experimenting :alembic: and getting new features in to production :
- :x: lose far less hours :stopwatch: struggling with bash scripts
- :heavy_check_mark: Combine MLDOCK with any open-source platform or tool :hammer: to achieve your Machine learning goals :dart:.
- :x: lose far less energy :zap: wrangling your machine learning assets.
- :heavy_check_mark: Think less about docker :thinking:, push :arrow_up: :cloud: more models to production.
- :x: use far less effort :muscle: converting development code in to code that runs in production.

## Where does MLDOCK fit in?

![ml-development-workflow](/images/ml-development-workflow.png)

The typical production machine learning workflow comprises, speaking broadly, of the following:
1. **Prepare** - Preparing data.
2. **Build** - Developing an algorithm.
3. **Experiment** - Running Experiments.
4. **Deploy** - Deploying to production.
5. **Monitor** - Monitoring ML service and model performance

### We want to bridge the gap... :rainbow:

In our modern world there are many options, opinions and solutions to getting to production. The most prominent platforms tend to either start at the experimentation side, hoping to help you iterate ideas faster, or start on the production side, putting all their attention to helping you run your ML code on a computer in the cloud. With all this power comes great complexity however, and can mean getting started :checkered_flag: :car: with ml in production can still mean months of work.

We want to build tooling that bridges the gap, allowing you to add any tools to support the various parts of your ML workflow and then finally deploy to any cloud platform.

![ml ecosystem with mldock](/images/ml-ecosystem-w-mldock.png)

### We see things differently... :rocket:

At MLDOCK we see things differently, we want to provide development tooling that connects all the aspects of machine learning toegether. :eyes: Focusing on ease of development while allowing you to deploy :rocket: to any cloud platform your heart desires. At MLDOCK, we think of ML applications in a similar light to web applications or backend server applications. At MLDOCK, our goal is to provide open-source, agnostic tooling so that you can start simply and build on top of it as your need grows.

![mldock is inspired by](/images/mldock-analogs.png)

Inspired by web development community tooling such as [Laravel](https://laravel.com/) and [Nuxt](https://nuxtjs.org/). And building on the awesome work done by [Amazon Sagemaker](https://aws.amazon.com/sagemaker/), [Sagemaker Training Toolkit](https://github.com/aws/sagemaker-training-toolkit) and [Sagify](https://github.com/Kenza-AI/sagify) we felt a tool was needed to provide a true seamless local development experience which lined up well with how models could be deployed in production.

## Develop locally, deploy Everywhere

We focused on **build local first approach**. Starting with a command line tool that uses the docker engine and tools but packs in ml focused conveniences so you don't have to write any new bash commands and code.

![build-with-mldock](/images/build-with-mldock.png)

#### Going from build to deploy

From here you can trust that your container will be stable and production ready out the box. A true local development experience in which you **Build** local and **Deploy** to the cloud.

![Build-to-deploy](/images/Build-to-deploy.png)

#### Deploy everywhere

We mean this in the truest sense. Where most platforms try to lock you in to their eco-system, MLDOCK gives you robust portability to be able to deploy your code anywhere. Train on a fully managed serverless service and deploy to any other container service as you need. The goal of MLDOCK is to provide a system that supports this portability :tada:

We currently support many of the top machine learning cloud platforms and are adding new platforms in an on going process. 


![deploy-w-mldock](/images/deploy-w-mldock.png)

::: tip
Find out more, see our full list of [supported cloud platforms](platforms.html)

:::