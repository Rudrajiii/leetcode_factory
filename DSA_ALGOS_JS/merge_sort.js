var mergeSort = (arr) => {
    if(arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0 , mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left) , mergeSort(right));
}
function merge(left , right){
    let sortedArray = [];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sortedArray.push(left.shift());
        }else{
            sortedArray.push(right.shift());
        }
    }
    return [...sortedArray , ...left , ...right]
}
console.log(mergeSort([-9 , 10 , 9 , 0 , -2 , 4 ,5 , -5]))