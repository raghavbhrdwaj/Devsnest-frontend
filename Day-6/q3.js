function first(arr, n=0){
    if(n>0){
    return(arr.slice(0,n));
    }
    else if(n=0){
        return(arr[1]);
    }
    else{
        return(arr.slice(0,0));
    }
    
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
