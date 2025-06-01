/**
 * You are given an array of integers. Your task is to sort the array in ascending order using the Selection Sort algorithm and return the sorted array.
 */

function selectionSort(nums) {
    function swap(array, index1, index2) {
        const temp = array[index1];
        array[index1] = array[index2]
        array[index2] = temp;
    }

    for (let i = 0; i < nums.length; i++) {
        let minIndex = i;
        for (j = i + 1; j < nums.length; j++) {
            if (nums[minIndex] > nums[j]) {
                minIndex = j;
            }
        }
        swap(nums, i, minIndex)
    }
    return nums
}

const input = [64, 25, 12, 22, 11]

console.log(selectionSort(input)); // [11, 12, 22, 25, 64]

