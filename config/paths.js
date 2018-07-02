const fs = require('fs');
const path = require('path');


const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);


module.exports = {
  root: appDirectory,
  appBuild: resolveApp('build'),
  appHtml: resolveApp('index.html'),
  appIndexJs: resolveApp('client/index.js'),
  appSrc: resolveApp('client'),
  appAssets: resolveApp('public'),
  globalImages: resolveApp('public/images')
};
