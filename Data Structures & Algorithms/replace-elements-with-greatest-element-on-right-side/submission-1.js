class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {

        for(let i = 0 ; i < arr.length; i++){

            let max = 0;

            for(let j = i+1 ; j < arr.length; j++){
                 max = Math.max(max,arr[j]);
            }

            
             arr[i] = ((arr.length -1) === i ) ? -1 : max
        }

        return arr;
    }
}
