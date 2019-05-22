const path=require('path');
const process=require('process');

module.exports={
  //优化级别：'none', 'development', 'production'
  mode: 'development',
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }
};
