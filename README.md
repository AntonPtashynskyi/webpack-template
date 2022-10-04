// root directory
**npm init -y** = y - to skip all init properties
**npm install webpack -D** = d - only for dev dependencies
**npm install webpack-cli webpack-dev-server -D** = cli - for webpack command / server

// Scripts in **package.json**
"scripts": {
"start": "webpack serve", // run webpack + server for develope
"build-dev": "webpack " , // for build develope example project
"build-prod": "webpack --node-env=production", // for production build
"clear": "rd /s /q dist" // for clean dist directory
}

// in root create **webpack.config.js** look to the file example in the code

// create **.browserslistrc** properties for witch browsers it your build should work
// instal loader for HTML **npm install --save-dev html-loader**
// instal loader for CSS **npm install --save-dev css-loader**
// instal loader for CSS **npm install --save-dev style-loader**
// instal loader for SCSS **npm install sass-loader sass --save-dev**

// instal plugin for load CSS in separate file **npm install --save-dev mini-css-extract-plugin**
