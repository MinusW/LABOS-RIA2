# README

# RIA2 - LABOS

This repository has been published here for educational purposes. It consists of several labs for learning about javascript frameworks.

## Installation

Pre-requisites :

* npm 10.4.0 or upper [official doc](https://docs.npmjs.com/try-the-latest-stable-version-of-npm)
* node v20.11.0 or upper [official doc](https://nodejs.org/en/download)
* git version 2.43.0.windows or upper [official doc](https://git-scm.com/)

Note : Configuration tested and validated on Webstorm IDE version 2023.3.2

## Retrieve the code

* Create a fork using github's online tools
* Clone the forked repository locally
* Activate Git-flow
* Add an upstream to the original repository (to receive updates or patches)
* Perform an update attempt between the remote develop branch and your own

* [How to fork on Github](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)

## Webstorm IDE configuration for testing, debugging and code coverage

* [Jest](https://www.jetbrains.com/help/webstorm/running-unit-tests-on-jest.html#ws_node_test_docker)
* [Debug Test](https://www.jetbrains.com/help/webstorm/running-unit-tests-on-jest.html#ws_jest_debugging_tests)
* [Code Coverage](https://www.jetbrains.com/help/webstorm/running-unit-tests-on-jest.html#ws_jest_code_coverage)

```
In Preferences | Languages & Frameworks | JavaScript | Libraries, press Download..., select 'jest' from the list of available stubs, press Download and Install
```

## VueJs Config and useful commands

* [VueJs - Quick Start](https://vuejs.org/guide/quick-start)

Note : this demo repo includes many projects. Move into the right one.

* Solve dependencies

```
    npm install
```

Note : fix high vulnerability issues (```npm audit fix```)

* Run in dev mode 

```
    npm run dev
```

* Prepare the app to the prod

```
    npm run build
```

## Contributing
We welcome your feedback. Use the issues.

## License
[MIT](LICENSE.md)
