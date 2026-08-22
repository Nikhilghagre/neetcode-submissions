class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const  hashMap = new Map();

        for(let i =0 ; i < nums.length ; i++){
            hashMap.set(nums[i],(hashMap.get(nums[i])?? 0) + 1)
        }

       let sortedMap = Array.from({length : nums.length + 1}, () => [])

        for(const [key,freq] of hashMap){
            sortedMap[freq].push(key);
        }

        const result = []
        for(let i = sortedMap.length-1; i >= 0 && k >= result.length; i--){

            for(const num of sortedMap[i]){
                result.push(num);
                if(result.length === k) return result;
            }

        }

    }
}
