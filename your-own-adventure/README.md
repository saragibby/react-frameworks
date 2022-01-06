https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658


https://www.code-boost.com/webpack-react-setup/#:~:text=How%20to%20Set%20up%20a%20React%20Webpack%20Application,browser%2C%20its%20time%20to%20prepare%20it%20for%20production

https://jorgechavez.dev/2020/05/02/how-to-configure-react-app-with-webpack-and-babel/


1. npm init (take defaults, or override where needed)
2. add .gitignore
3. add public folder
4. add index.html to public folder
5. npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
6. add .babelrc
7. npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
8. add webpack.config.js
9. npm install --save-dev react react-dom
10. create src folder
11. add index.js in src folder
12. add App.js file in src folder
13. add App.css in src folder
14. add start script to package.json
15. npm install --save-dev react-hot-loader, and import into App.js

Final project structure should look like:
```
.
+-- public
| +-- index.html
+-- src
| +-- App.css
| +-- App.js
| +-- index.js
+-- .babelrc
+-- .gitignore
+-- package-lock.json
+-- package.json
+-- webpack.config.js
```