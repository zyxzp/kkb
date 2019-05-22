/*let arr=new Array<number>();

arr.push(55);
arr.push('abc');

console.log(arr);
*/
function sum(arr) {
    var result = 0;
    arr.forEach(function (i) { return result += i; });
    return result;
}
console.log(sum([12, '5', 8]));
