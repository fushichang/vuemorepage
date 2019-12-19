let pageMethod = require('./utils/getPages.js');
let pages = pageMethod.pages();

const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');


module.exports = {
  pages
}