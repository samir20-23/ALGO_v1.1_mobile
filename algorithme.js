
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
