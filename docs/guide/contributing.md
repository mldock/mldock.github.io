# Contributing

MLDOCK is a open-source tool and as such we hope that the community adds ideas, features and bugfixes back to the code base.

## General Instructions

1. Please read the whole document.
2. Interested in contributing some code or bugfixes to MLDOCK check [becoming a contributor](contributing.md#becoming-a-contributor)
3. Interested in collaborating with MLDOCK check [becoming a collaborator](contributing.md#becoming-a-collaborator)

## Collaborators vs Contributors

- `Collaborators` are developers wanting steadily contribute to the code-base,  guide the MLDOCK roadmap and finally decide what is brought in to the code base.
- `Contributors` are developers that may just want to contribute a fix or code that they may find useful.

#### Becoming a collaborator
- Email us. Follow details below.
- We will review and get back to you as quick as possible.

::: details
Email: 📫 `sheldon.mldock@gmail.com`

Subject: `"collaborator application"`

Body: short statement on `"Why you want to contribute"` and a `link` to your `github profile`.
:::

::: tip

When considering your application, we look at:
1. Current contribution to MLDOCK.
2. Why I want to contribute statement.
3. your developer experience

Contribution is the best resume, so have a look at [becoming a contributor](contributing.md#becoming-a-contributor) to MLDOCK.
:::

#### Becoming a contributor
- Look at the project board or Find an issue you want to contribute to.
- Follow contributor best practices on [creating issues](contributing.md#create-an-issue)
- follow [forked repository](contributing.md#fork-it-checkout-pr-back-to-us) to get started.


## Contributing code

Here we give a set of guides on how to get started.

#### Contributor best practices
- Check [open issues](https://github.com/mldock/mldock/issues) to see if your fix or feature has been raised before.
- Don't start by claiming a task :x:. Start with [forking the repository](contributing.md#fork-it-checkout-pr-back-to-us) :white_check_mark: and experimenting locally with your feature or bugfix.
- Once you have a fix, [create a push request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) with your fix back to MLDOCK main. A PR is where you add [issue linking tags e.g. resolves #99](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) to your PR.
- Your code will automatically be tested in Github Actions CI. All tests must pass.
- MLDOCK collaborators will then review your code. (This may take a few days)
- Once you have an approval an MLDOCK collaborator will merge your code in to main.

::: details
Once merged, your code will now be on main. Chances are that your code will not immediately be deployed to PYPI. Instead the package will be re-deployed once collaborators are ready to do so. 🙏 Please be patient. 🙏 This may mean waiting for other PR's to merged. This is left up to the discretion of the MLDOCK Collaborators.
:::

::: warning
- a WIP PR should only hang around for maximum 14 days. Any longer and the PR will be automatically closed.
- A PR that takes more than 14 days to be closed, will be closed, and should be split in to more tickets. Add additional issues to split the task in to smaller tasks for yourself.
:::

#### Create an issue

Have a look at our current [open issues](https://github.com/mldock/mldock/issues) on MLDOCK.

1. Search through our currently open issues to find any similar issues.
2. If a similar issue exists, upvote and comment on the issue.
3. If no similar issue exists, create it!
4. (Optionally) Wait a few days for comments and suggestions.
5. Get started compiling your code fix or feature in your [forked repository](contributing.md#fork-it-checkout-pr-back-to-us)

#### Fork it!, Checkout!, PR back to us

Get involved in comments and PR fixes and features yourself. :tada: We encourage it :whale:. 
Our suggested workflow is to fork the repository, checkout a branch on your own forked repository and finally PR back to mldock repo on branch => main.

Follow the reference, [Create a PR from a fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)
 