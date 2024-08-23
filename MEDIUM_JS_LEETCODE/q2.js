//!Set Colours
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for(let i=1;i<nums.length;i++){
        let numToInsert = nums[i];
        let sortedIndex = i - 1;
        while(sortedIndex >= 0 && nums[sortedIndex] > numToInsert){
            nums[sortedIndex + 1] = nums[sortedIndex];
            sortedIndex--;
        }
        nums[sortedIndex + 1] = numToInsert;
    }
};

var sortColors = function(nums , low= 0 , high = nums.length - 1) {

    if (low < high) {
        let pIndex = partition(nums , low , high)
        sortColors(nums, low, pIndex - 1)
        sortColors(nums , pIndex + 1 ,  high )
    }    
    return nums
}

function partition(nums, low, high) {
    let pivot = nums[low];
    let i = low;
    let j = high;
    while (i < j) {
        while (nums[i] <= pivot && i <= high - 1) {
            i++;
        }
        while (nums[j] > pivot && j >= low) {
            j--;
        }
        if (i < j) {
            swap(nums, i, j);
        }
    }
    swap(nums, low, j);
    return j;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


