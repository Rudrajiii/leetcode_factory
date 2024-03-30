const arr = [-6 , 20 , 8 , -2 , 4];
for(let i = 1 ; i < arr.length ; i++) {
    let numToinsert = arr[i];
    let sortedIndex = i - 1;
    while(sortedIndex >= 0 && arr[sortedIndex] > numToinsert){
        arr[sortedIndex + 1] = arr[sortedIndex];
        sortedIndex--;
    }
    arr[sortedIndex + 1] = numToinsert;
}
console.log(arr); //Big(0) => 0(n^2)



