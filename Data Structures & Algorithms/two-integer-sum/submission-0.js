class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const hashMap = new Map()

        for (let i = 0 ; i < nums.length ; i++){
            let diff =target - nums[i];
            
            if(hashMap.has(diff)){
                return [i,hashMap.get(diff)]
            }
            hashMap.set(nums[i],i)
        }


    }
}
