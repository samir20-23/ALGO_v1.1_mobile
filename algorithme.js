
//                               methode number 1 
//     let array = [3,6,8,1];
//     let len = array.length;
//     let temps;
//     for(a=0;a<len;a++){
//     for(b=a;b<len;b++){
//     if(array[a]<array[b]){
//     temps=array[a];
//     array[a]=array[b];
//     array[b]=temps;
//     }
//     }
//     }
//     console.log(array)

//                               methode number 2 

//     let array=[,5,1,2,4,3,6,9,7,8];
//     function forloops(array){
//     for(a=0;a<array.length;a++){
//         for(b=a;b<array.length;b++){
//             algo(array,a,b,null);
//         }
//     }
//     }

//     function algo(array,a,b,temps){
//     if(array[a]>array[b]){
//     temps=array[a];
//     array[a]=array[b];
//     array[b]=temps;
//     }
//     }
//     forloops(array);

//     console.log(array);

//                               methode number 3

let array =[2,6,3,6,4];
let len = array.length;
let temps;
let a = 0 ;
while(a<len){
    let b =a;
    while(b<len){
        if (array[a] < array[b]) {
            temps = array[a];
            array[a] = array[b];
            array[b] = temps;
          }
b++
    }
    a++
}
console.log(array);

//                               methode number 4
// let array = [6,4,7,2,3,1,5,8,10,9];
// let tm , im ; 
// let count = 0;
// do{
//      if(array[count] !== undefined){
//         count++;
//      }else{
//           break;
//      }
// }
// while(true);
// for(a=0;a<count;a++){
// for(b=a;b<count;b++){
//      //
//      function iff(condition,trueBlock,falseBlock){
// condition ? trueBlock() : falseBlock();
//      }
//      iff(array[a]<array[b],function(){tm = array[a];
//           array[a] = array[b];
//           array[b] = tm;},function(){});
//      //
 
// }
// }
// console.log(array);
//                               methode number 5
// let arr = [6,5,7,4,8,3,2,1];
// let tm ;
// let cout = 0;
// do{
//  if(arr[cout] !== undefined){
//      cout++;
//  }else{
//      break;
//  }
// }
// while(true);
// for(a=0;a<cout;a++){
// for(b=a;b<cout;b++){
//     function iff(condition,trueBlock,falseBlock){
// condition ? trueBlock() : falseBlock();
//     }
//     iff(arr[a]<arr[b],()=>{
//      tm = arr[a];
//      arr[a]=arr[b];
//      arr[b]=tm;
//     })
// }
// }
// console.log(arr);

//                               methode number 6
// let ar = [5,6,4,7,2,8,1,3];
// let tm ;
// let len;
// let count = 0;
// while(ar[count] !== undefined){
// count++;
// break;
// }
// len= count;
// for ( a = 0; a <len; a++) {
//      for (let b = a; b < len; b++) { 
//           function iff(condition,trueBlock,falseBlock){
// condition ? trueBlock() : falseBlock();
//           }     
//           iff(ar[a]<ar[b],()=>{
//                tm =ar[a];
//                ar[a]=ar[b];
//                ar[b] =tm;
//           },()=>{})
//      }
     
// }
// console.log(ar);

