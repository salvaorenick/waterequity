## Patternlab

### Atomic Design web app

This is not what the site runs on. This is a sandbox containing parts and patterns and where we generate front end code. It is used to model new parts from and to build the site's css and javascript. For more information on Patternlab, please visit the [Patternlab website](http://patternlab.io/).

For running on a Mac, we'll need to make sure Xcode, Homebrew, Node, and Git are installed in order to download this repository and install the app's components to run it. Fun stuff!

#### Dependencies

- Install [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
- Install [Homebrew](http://brew.sh/) by using the terminal command `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
- Install [Node](https://nodejs.org/en/) by using the terminal command `brew install node@6.8.0`
- Install Git by using the terminal command `brew install git`
- Install [Bower](https://bower.io/#install-bower) by using the terminal command `npm install -g bower`

#### App specific

Once the dependencies are taken care of we can just install the app-specific stuff.

- Clone this repo by using your terminal with the command `git clone git@github.com:salvaorenick/water-equity.git`
- In the terminal go into the directory with all the contents with the terminal command `cd water-equity`
- Install the Atomic Design web app stuff with the terminal command `npm install && bower install`

#### Run the Atomic Design app

After all's installed, use the terminal command in the *public* directory `gulp serve` and the web app will come to life in your browser. Yay!
