import $ from 'jquery';
import process from 'process';

function log(...msg){
  if(process.env.NODE_ENV=='development'){
    console.log(...msg);
  }
}

$(function (){
  log('开始');

  alert('a');

  log('结束');
});
