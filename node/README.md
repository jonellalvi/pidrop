# Node Pidrop

These instructions are specific to developing the Pidrop project using [Node.js](http://nodejs.org). The [generic milestone instructions](../README.md) are repeated and expanded upon in each of the step directories, 1-7. You should read the READMEs in each of those directories as you progress. Additionally, if you find yourself stuck on a step, each directory includes a `solution` folder with a working example of a solution to that step. Do not worry if your solution does not match the solutions provided here. There are a million ways to solve every problem.

Before proceeding to [Step 1](./1), let's get the Pi ready for our Node program.

## Step 0

**Note**: This project is limited to working on Pi. You should find that you can develop and test entirely on your laptop without touching the Pi. That is fine (and encouraged) but we'll want to put this thing on the Pi sooner or later. To do that, we'll need to install Node.

1. Install [nvm](https://github.com/creationix/nvm) by running `curl https://raw.githubusercontent.com/creationix/nvm/v0.23.3/install.sh | bash`.
2. Install Node 0.10.28 (at the time of this writing, this is the latest distributed version of Node with a prebuilt ARM install for the Pi. This avoids building Node from source) by running `nvm install 0.10.28`.
3. Set nvm to use this newly installed version by running `nvm use 0.10.28`.
4. Set nvm to use this version of Node by default every time the Pi boots by running `nvm alias default 0.10.28`.
5. Test that everything works by running `node -v`. You should see `v0.10.28`.

That's it! Proceed to [Step 1](./1), and happy coding.