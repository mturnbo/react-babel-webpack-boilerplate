# React Babel Webpack Boilerplate

This is a boilerplate for starting a React project.  It contains the following components:
* App Component
* Header Component
* Footer Component
* Button Component
* Widget Component
* Widget Container

## Features:
* React.js - React 16
* Babel - ES6, ESNext, Airbnb and React/Recommended config
* Webpack 3 with Webpack Dev Server
* ESLint with Airbnb's style 
* SCSS Styling
* Jest with Enzyme
* Storybook

## Quick Start
1. Clone this repo using `git clone https://github.com/mturnbo/eact-babel-webpack-boilerplate.git`
1. Run `yarn` or `npm install` to install dependencies
1. Run `npm run start` or `yarn start` to see the example app at `http://localhost:8080`
1. Run `npm run storybook` or `yarn storybook` to run Storybook at `http://localhost:9091`

## Docker Configuration
A Docker configuration is including to run with nginx inside a container:
1. Build project with `npm run build` or `yarn build`
1. Build Docker image with `docker build -t react-babel-webpack-boilerplate:latest .`
1. Run `docker run -it -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -p 8081:8081 --rm react-babel-webpack-boilerplate:latest`

## License
MIT license, Copyright (c) 2018 Marcus Turnbo.
