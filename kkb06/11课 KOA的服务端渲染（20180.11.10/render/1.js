let arr=[];

function get(){
  return arr;
}

function add(n){
  arr.push(n);
}

let res=get();
add(15);

console.log(res);
