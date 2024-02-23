function bubbleSort(arr) {
    // 获取数组长度  
    const len = arr.length;

    // 遍历数组  
    for (let i = 0; i < len - 1; i++) {
        // 设置一个标志位，用于判断本轮循环是否进行了交换  
        let swapped = false;

        // 从数组的第一个元素开始，与后面的元素进行比较和交换  
        for (let j = 0; j < len - 1 - i; j++) {
            // 如果当前元素大于下一个元素，则交换它们的位置  
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                // 标志位设为 true，表示发生了交换  
                swapped = true;
            }
        }

        // 如果本轮循环没有发生交换，说明数组已经有序，无需继续排序  
        if (!swapped) {
            break;
        }
    }

    // 返回排序后的数组  
    return arr;
}

module.exports = bubbleSort;