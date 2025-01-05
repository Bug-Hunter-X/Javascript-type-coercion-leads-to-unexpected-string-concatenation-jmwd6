function foo(a,b){
if(typeof a === 'number' && typeof b === 'number'){
return a+b;
}else{
throw new Error("Invalid input type. Both parameters must be numbers");
}
}
console.log(foo(2,3)); //outputs 5
//console.log(foo(2,"3")); //throws error
//console.log(foo("2",3)); //throws error
//console.log(foo("2","3")); //throws error