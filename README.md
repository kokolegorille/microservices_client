# microservices client

Decembre 2020

## Installation

$ mkdir microservices
$ cd microservices
$ npm init -y

$ git init
$ git add .
$ git commit -m "Initial commit"

$ vim .gitignore

```
/dist
/node_modules
npm-debug.log
.DS_Store
```

### Dev Packages

$ npm install -D webpack webpack-cli
$ npm install -D webpack-dev-server html-webpack-plugin
$ npm i -D css-loader css-minimizer-webpack-plugin file-loader mini-css-extract-plugin node-sass sass-loader terser-webpack-plugin url-loader 
$ npm install -D @babel/core @babel/preset-env @babel/preset-react babel-loader

### Optional Dev Packages

$ npm install -D copy-webpack-plugin

### Packages

$ npm i react react-dom phoenix babel-polyfill