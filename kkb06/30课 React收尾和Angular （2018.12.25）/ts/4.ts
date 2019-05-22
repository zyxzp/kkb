/*let arr=new Array<number>();

arr.push(55);
arr.push('abc');

console.log(arr);
*/

function sum(arr: Array<number>):number{
  let result=0;

  arr.forEach(i=>result+=i);

  return result;
}

console.log(sum([12,'5',8]));
