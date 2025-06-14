function length(nums) {
    if (!Array.isArray(nums)) {
        throw new Error("Input must be an Array");
    }

    if (nums.length === 0) {
        return 0;
    }

    const lis = [];

    for (let num of nums) {
        let left = 0;
        let right = lis.length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (lis[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        lis[left] = num;
    };
    return lis.length;
};

const arr = [15, 10, 2, 5, 1, 3, 6, 100, 9];

console.log(length(arr));