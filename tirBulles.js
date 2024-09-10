let array = [5,8,1,2,3,7,6,4];
let tm;
let len = 0;
do{
if(array[len] !== undefined){
     len++;
}else{
     break;
}
}while(true);
for(a=0;a<len;a++){
     for(b=a;b<len;b++){
          function iff(condition,trueBlock,falseBlock){
condition? trueBlock(): falseBlock();
          }

          iff(array[a]<array[b],()=>{tm=array[a];
               array[a]=array[b];
               array[b]=tm;},()=>{});
 
}
}
console.log(array);
