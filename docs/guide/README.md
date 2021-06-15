# Introducing MLDOCK :tada:

As Data Scientists, docker can be both a huge enabler and a huge headache. And if you're a Data Scientist with a goal of deploying machine learning in to production, you might find that MLOps and Data Ops take up 90% of your time.

Questions like .. "Which server, where to serve, how to maintain the code, how to maintain the model..." become huge set of hurdles to overcome. Nevermind the challenges of validating experiments, analyzing performance and generating insights for better algorithms. The real data science. :microscope: ;)

That is why we built MLDOCK. **To support the development of machine learning and enable you to get more models to production, faster and easier**.

## Where does MLDOCK fit in?

![ml-development-workflow](/images/ml-development-workflow.png)

The typical production machine learning workflow comprises, speaking broadly, of the following:
1. **Prepare** - Preparing data.
2. **Build** - Developing an algorithm.
3. **Experiment** - Running Experiments.
4. **Deploy** - Deploying to production.

In our modern world there are many options, opinions and solutions to getting to production. Many platforms and tools focused on the core steps in production machine learning process, namely data preparation, experimentation and deploying models but very few provided simple tools for building and developing machine learning. Deploying to the cloud was like a game of wack-a-mole, hoping that nothing exploded. :bomb: Many of which require hours of onboarding and research to get even the simplest model to production. Even worse so, some even have partially helpful "getting started" documentation focused on getting you started on day 1. But on day 2 you realize just how much more you need to do to make the system productive. 

At MLDOCK we saw a different way, **"Build local, Deploy everywhere"**. :whale:

Inspired by the great work done by [Amazon Sagemaker](https://aws.amazon.com/sagemaker/), [Sagemaker Training Toolkit](https://github.com/aws/sagemaker-training-toolkit) and [Sagify](https://github.com/Kenza-AI/sagify) we felt a tool was needed to provide a true seamless local development experience which lined up well with how models could be deployed in production.

#### Develop locally with mldock
We focused on **build local first approach**. Starting with a command line tool that came with many of the docker development conveniences built in but without the mess of bash scripts everywhere. MLDOCK brings the power of docker and frames it around the core machine learning tasks related to production.

![build-with-mldock](/images/build-with-mldock.png)

#### Going from build to deploy
From here you can trust that your container will be stable and production ready out the box. A true local development experience in which you **Build** local and **Deploy** to the cloud.

![Build-to-deploy](/images/Build-to-deploy.png)

#### Deploy everywhere
We mean this in the truest sense. Where most platforms try to lock you in to their eco-system, MLDOCK gives you robust portability to be able to deploy your code anywhere. Train on a fully managed serverless service and deploy to any other container service as you need. The goal of MLDOCK is to provide a system that supports this portability :tada:

We currently support many of the top machine learning cloud platforms and are adding new platforms in an on going process. 


![deploy-w-mldock](/images/deploy-w-mldock.png)