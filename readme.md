# Microverse Project Title - Choose and Build a Portfolio
[Portfolio Project]
Professional Curriculum

### Snapshot

![](https://github.com/geraldgsh/mv-portfolio/blob/feature/dist/media/screenshot.JPG)

### Introduction.
Build a portfolio to showcase capability as a developer.

### Project Objectives

[Project Rubric](https://docs.google.com/document/d/11zQJ2GF9AJoh79Ije18xeujE08u1AEpsCrX-Lus9SPo/edit)

### Linter Setup

Clone file [content](https://github.com/microverseinc/linters-config/tree/master/javascript) into root directory (except for readme.md)

Install ESLint on Linux environment using the following commands

Install Node Version Manager to update NodeJS + NPM.

```sh
$curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

$export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"

$[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Run the following command to verify installation;

```sh
$ command -v 
nvm
```

To download, compile, and install the latest release of node, do this.

```sh
nvm install node
```

Source [here](https://github.com/nvm-sh/nvm#installing-and-updating)

Go project folder using WSL environment and initiate NPM with following command

```sh
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

{
  "name": "mv-portfolio",
  "version": "1.0.0",
  "description": "Personal portfolio",
  "main": "'./src/index.js'",
  "scripts": {
    "build": "webpack --mode development",
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --progress --watch"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/geraldgsh/mv-portfolio.git"
  },
  "author": "Gerald Goh",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/geraldgsh/mv-portfolio/issues"
  },
  "homepage": "https://github.com/geraldgsh/mv-portfolio#readme",
  "devDependencies": {
    "eslint": "^6.8.0",
    "eslint-config-airbnb-base": "^14.1.0",
    "eslint-plugin-import": "^2.20.1",
    "webpack": "^4.42.1",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.10.3"
  }
}
```

Command above will generate a "package.json" file for ESlint work off from.

Install ESlint with following command

```sh
$ npm install eslint
npm notice created a lockfile as package-lock.json. You should commit this file.
+ eslint@6.8.0
added 123 packages from 83 contributors and audited 179 packages in 8.979s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Run the following to configure eslint in project root folder

```sh
$ eslint --init
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? None of these
? Does your project use TypeScript? No
? Where does your code run? Browser
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
? What format do you want your config file to be in? JSON
Checking peerDependencies of eslint-config-airbnb-base@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.1.0 eslint-plugin-import@^2.18.2
? Would you like to install them now with npm? Yes
Installing eslint-config-airbnb-base@latest, eslint@^5.16.0 || ^6.1.0, eslint-plugin-import@^2.18.2
npm notice save eslint is being moved from dependencies to devDependencies
+ eslint-config-airbnb-base@14.0.0
+ eslint@6.8.0
+ eslint-plugin-import@2.20.1
added 61 packages from 37 contributors, updated 1 package and audited 387 packages in 8.597s

16 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Successfully created .eslintrc.json file in 
/weather-app
ESLint was installed locally. We recommend using this local copy instead of your globally-installed copy.
```

with the following setup;

`? How would you like to use ESLint?` To check syntax, find problems, and enforce code style

`? What type of modules does your project use?` JavaScript modules (import/export)

`? Which framework does your project use?` None of these

`? Does your project use Typescript` No

`? Where does your code run?` Browser

`? How would you like to define a style for your project?` Use a popular style guide

`? Which style guide do you want to follow?` Airbnb

`? What format do you want your config file to be in?` JSON

`? The config that you've selected requires the following dependencies: Would you like to install them now with npm?` Yes

Start ESlint with this command.

```sh
eslint script.js
```

#### Setup Webpack watch

Install webpack;

```sh
$ npm install webpack webpack-cli --save-dev
npm WARN rollback Rolling back readable-stream@2.3.6 failed (this is probably harmless): EINVAL: invalid argument, lstat '/mnt/d/Google_Drive/Microverse/5.Javascript/4.oop/todo-list/node_modules/fsevents/node_modules'
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ webpack@4.41.6
+ webpack-cli@3.3.11
added 360 packages from 209 contributors, removed 10 packages and audited 5675 packages in 20.445s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Now we'll create the following directory structure, files and their contents:

Create;
./webpack.config.js

```javascript
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};
```

Webpack can watch files and recompile whenever they change. Turn on watch mode. This means that after the initial build, webpack will continue to watch for changes in any of the resolved files.

```javascript
./package.json

{
  "name": "mv-portfolio",
  "version": "1.0.0",
  "description": "Personal portfolio",
  "main": "'./src/index.js'",
  "scripts": {
    "build": "webpack --mode development",
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --progress --watch"
  },
  .
  .
```

Run "yarn build"

```javascript
$ yarn build
yarn run v1.21.1
$ webpack --mode development
Hash: 87bba94788336242806f
Version: webpack 4.41.6
Time: 102ms
Built at: 02/21/2020 5:33:18 AM
  Asset      Size  Chunks             Chunk Names
main.js  12.3 KiB    main  [emitted]  main
Entrypoint main = main.js
[./src/index.js] 1.23 KiB {main} [built]
[./src/modules/DOMControl.js] 3.12 KiB {main} [built]
[./src/modules/localControl.js] 1.6 KiB {main} [built]
Done in 2.67s.
```

Or run "yarn watch" to start.
```javascript
$ yarn watch

yarn run v1.21.1
$ webpack --watch

webpack is watching the files…

Hash: c1487def981e257fe947
Version: webpack 4.41.6
Time: 392ms
Built at: 02/21/2020 5:34:39 AM
  Asset      Size  Chunks             Chunk Names
main.js  1.55 KiB       0  [emitted]  main
Entrypoint main = main.js
[0] ./src/index.js + 2 modules 5.96 KiB {0} [built]
    | ./src/index.js 1.23 KiB [built]
    | ./src/modules/DOMControl.js 3.12 KiB [built]
    | ./src/modules/localControl.js 1.6 KiB [built]
```
#### Portfolio
Portfolio was built with Bulma, Webpack, React, JS, CSS & HTML.

### To begin

1. Clone Repo
2. 'npm install' to install dependencies
3. `npm run dev' on terminal
4. Open [http://localhost:8080](http://localhost:3000) to view it in the browser.

### Wiki

Checkout our [wikipage](https://github.com/geraldgsh/mv-portfolio/wiki) for more details. 

#### Live Version
[Link](https://geraldgsh.com)

#### Getting Started
Clone repo and open index.html with your favorite browser.

#### Prerequisites
Web browser like Chrome, Mozilla or similar.

### Github Repo
https://github.com/geraldgsh/mv-pofolio

### Future feature
1. CSS animation

👤 **Author**

Github: [geraldgsh](https://github.com/geraldgsh)

Twitter: [geraldgsh](https://github.com/geraldgsh)

Linkedin: [Gerald Goh](https://www.linkedin.com/geraldgsh)

## 🤝 Contributing
Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/geraldgsh/mv-portfolio/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](lic.url) licensed.

