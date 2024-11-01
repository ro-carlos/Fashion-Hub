<br/>
<p align="center">
  <a href="https://github.com/ro-carlos/fashion-hub">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Cypress.png" alt="Logo" width="200" height="100">
  </a>

  <h3 align="center">Fashion Hub Challenge</h3>

  <p align="center">
    Cypress Automation Framework
    <br/>
    <br/>
    <a href="https://github.com/ro-carlos/fashion-hub"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/ro-carlos/fashion-hub/total) ![Contributors](https://img.shields.io/github/contributors/ro-carlos/fashion-hub?color=dark-green) ![Issues](https://img.shields.io/github/issues/ro-carlos/fashion-hub) ![License](https://img.shields.io/github/license/ro-carlos/fashion-hub)

## Table Of Contents

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Start Local Environment](#start-local-environment)
- [Usage](#usage)
- [Authors](#authors)

## About The Project

![Screen Shot](https://drive.google.com/uc?export=view&id=1OLed9NKeAL6am5GS6ruwJOeS3PIYEbVf)

This is an automation framework to run test cases using cypress with javascript.

## Built With

Cypress 13.7.1, Node 22.7.0, NPM 10.8.2

## Getting Started

You just need the Cypress, Node and NPM on your local machine.

### Prerequisites

Install Node.

- node

_Check Node, please refer to the [Node Versions](https://nodejs.org/en/download)_

### Installation

1. Clone the repo

```sh
git clone https://github.com/ro-carlos/fashion-hub.git
```

2. Install Node Dependencies

```sh
npm install
```

### Start local environment

1. Download docker image: [Docker Image](https://hub.docker.com/r/pocketaces2/fashionhub-demo-app)

2. Start docker image

```sh
docker run -p 4000:4000 pocketaces2/fashionhub-demo-app:latest
```

## Usage

1. Open cypress terminal.

```sh
npx cypress open
```

2. Run all features in firefox.

```sh
npx cypress run --browser firefox
```

3. Run all features headless mode.

```sh
npx cypress run --browser chrome --headless
```

4. Run all features headed mode in local environment.

```sh
npx cypress run --browser chrome --headed --env envFile=local
```

5. Run all features with @Smoke Annotation headless mode.

```sh
npx cypress run --browser chrome --headless --env envFile=local,tags=@Smoke
```

6. Run all features with @Regression Annotation headless mode.

```sh
npx cypress run --browser chrome --headless --env envFile=local,tags=@Regression
```

7. Run single feature with tag.

```sh
npx cypress run --spec cypress/integration/login.feature --headless --browser chrome --env envFile=local,tags=@Regression
```

8. Generate cypress report after execution.

```sh
node cypress/generate-report.js
```

9. Run smoke tests and generate cucumber report after execution.

```sh
npm run test:smoke:local.mac
```

Check package.json to view more useful commands.

## Authors

- **Carlos Rodríguez** - _Software Engineer_ - [Carlos Rodríguez](https://github.com/ro-carlos/) - _Challenge_
