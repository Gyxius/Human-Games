#!/bin/bash

create_project() {
    # Don't forget to do chmod +x script.sh
    mkdir src  
    touch src/index.js
    touch src/styles.css
    touch src/index.html
    touch .dockerignore
    touch .gitignore   
    touch Dockerfile
    touch package-lock.json
    touch package.json     
    touch README.md   
    touch webpack.config.js
    touch script.sh  
    npm install --save-dev webpack webpack-cli
    npm install --save-dev html-webpack-plugin
    npm install --save-dev style-loader css-loader
}

create_project