class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {

        let ans = new Array(arr.length).fill(0)

        ans[arr.length-1] = -1;
        let max = 0;

        for(let i = arr.length -1 ; i > 0 ; i--){
            max = Math.max(max,arr[i])
            ans[i-1] = max;
        }

        return ans
    }
}
