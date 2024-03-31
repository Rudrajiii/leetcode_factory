//I have learned about Big(0) [Worst Case Time Complexity]
//in JS


//Basic Binary Search Algorithm

function BinarySearch(arr , t){
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    while(leftPointer <= rightPointer){
        let midIdx = Math.floor((leftPointer + rightPointer) / 2);
        if(arr[midIdx] === t){
            return midIdx;
        }
        if(arr[midIdx] < t){
            leftPointer = midIdx + 1;
        }else{
            rightPointer = midIdx - 1;
        }
    }
    return -1;
}
console.log(BinarySearch([-5 ,1 , 2 , 4 , 6 , 10 ] , 1));
console.log(BinarySearch([-5 , 2 , 4 , 6 , 10] , 10));
console.log(BinarySearch([-5 , 2 , 4 , 6 , 10] , 11));

function BinarySearchUsingRecursion(arr , t){
    return logic(arr , t , 0 , arr.length - 1);
}
function logic(arr , t , lp , rp){
    if(lp > rp) return -1;
    let mi = Math.floor((lp + rp) / 2);
    if(arr[mi] === t) return mi;
    if(arr[mi] < t){
        return logic(arr , t , mi + 1 , rp);
    }else{
        return logic(arr , t , lp , mi - 1);
    }
}

console.log(BinarySearchUsingRecursion([-5 , 2 , 4 , 6 , 10] , 6));
console.log(BinarySearchUsingRecursion([-5 , 2 , 4 , 6 , 10] , 10));
console.log(BinarySearchUsingRecursion([-5 , 2 , 4 , 6 , 10] , 11));