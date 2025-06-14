function indicesOfTwo(nums, target) {
    if (!Array.isArray(nums)) {
        throw new Error("Input 'nums' must be an Array");
    }
    if (typeof target !== 'number') {
        throw new Error("Input 'target' must be a number");
    }

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (map.has(diff)) {
            return [map.get(diff), i];
        }

        map.set(nums[i], i);
    }
    throw new Error("No valid pair exists for the given target");
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log(indicesOfTwo(nums, target));