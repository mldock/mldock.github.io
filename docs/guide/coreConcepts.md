# Core Concepts

To achieve our goal of **"build local, deploy everywhere"** we strove to provide a rich set of tooling, modules and an extensible design system that connected the desperate parts of machine learning in production. Even leveraging docker these set of tasks were tricky and naunced depending on what kind of algorithm and where we planned to deploy it.

In our experience, getting machine learning to production meant solving the following challenges:

1. **Provide Algorithm train/deploy scripts**.
2. **Download/Upload ML assets** i.e. data and models.
3. **Configure a Deployment server** to handle requests sent to the model.
4. **Configure image for chosen cloud container service** i.e. AWS Sagemaker, Kubernetes, AzureML.
5. **Provide method to pass parameters to the script runtime** i.e. hyperparameters, environment toggles and conditionals.

![mldock-core-functions](/images/mldock-core-functions.png)

## Container Life-Cycle Management

Similar to how your training script describes the steps taken to train a new machine learning model, a container has life-cycle or set of steps that define when and how certain tasks should be done. A typical container life-cycle could comprise of:

![mldock-container-lifecycle-management](/images/mldock-container-lifecycle-management.png)


#### Environment-supported Life-Cycles

Currently supports:
1. `Environment()` module based life-cycle management system
2. `Asset.py` scripted life-cycle management system

##### Environment() module

This uses environment variables to manage the life-cycle stages. Based on the `BaseEnvironment()` it extends it by allowing users to define specific environment variables with prefixes that can be automatically discovered at container set up.

##### Asset.py script

This uses python extended classes which allows user to script any additional tasks during either `startup` or `cleanup` steps which are called before your script and on final after your script execution.