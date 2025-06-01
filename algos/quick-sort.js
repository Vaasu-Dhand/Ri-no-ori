

function quickSort(array) {

    function sort(list) {
        if (list.length <= 1) return list;
        // Pick a pointer
        const pointerIdx = list.length - 1;
        const pointerValue = list[pointerIdx]
        // Divide the array into two halfes, left half values should be less than pivot and right half should be more
        const leftArray = []
        const rightArray = []

        for (let i = 0; i < list.length; i++) {
            if (i === pointerIdx) continue
            const value = list[i];
            if (value <= pointerValue) {
                leftArray.push(value)
            } else {
                rightArray.push(value)
            }
        }
        return [...sort(leftArray), pointerValue, ...sort(rightArray)]
    }
    return sort(array)

    // Recurse this until length of the array is 1

}



console.log(quickSort([-6, 20, 8, -2, 4, 12, 46, -10]));
