class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let contain = new Set();

        for (let i = 0; i < nums.length ; i++){

            if(contain.has(nums[i])){
                return true
            }
            contain.add(nums[i])
        }
        return false

    }
}
