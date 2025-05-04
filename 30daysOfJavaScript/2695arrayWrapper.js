var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce(
        (n, a) => n + a, 0
    );
}

ArrayWrapper.prototype.toString = function() {
    return `[${String(this.nums)}]`;
}

const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);

String(obj1);
String(obj2);
