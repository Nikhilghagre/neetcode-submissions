class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = new Map();

        for(let char of strs){

            let arr = new Array(26).fill(0);

            for(let ch of char){
                arr[ch.charCodeAt(0) - 97]++
            }
           const key = arr.join('#')

           if(hashMap.has(key)){
            hashMap.get(key).push(char)
           }else{
            hashMap.set(key,[char])
           }

        }

    return Array.from(hashMap.values())

    }
}
