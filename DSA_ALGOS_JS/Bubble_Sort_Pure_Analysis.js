const arr = [8 , 20 , -2 , 4 , -6]
let isSwapped;
let n = 0
do{
    isSwapped = false
    for(let i=0;i<arr.length -1 ; i++){
        if(arr[i] > arr[i+1]){
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            isSwapped = true;
            console.log('swapping...')
            n++
    }else{
        console.log('alredy swapped!')
        n++
    }
}
    
}while(isSwapped){console.log('round completed!')}
console.log(n) // 20
console.log(arr); // Big(0) = 0(n * n)

