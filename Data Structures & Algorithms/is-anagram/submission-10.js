class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) {
            return false;
        }

        const sCount = {}
        const tCount = {}

        for(let i = 0 ; i < s.length ; i++){
            sCount[s[i]] = (sCount[s[i]] ?? 0) + 1
        }

        for(let i = 0 ; i < t.length ; i++){
            tCount[t[i]] = (tCount[t[i]] ?? 0) + 1
        }

        for(const ch of s){
            if(sCount[ch] !== tCount[ch]){
               return false
            }
        }

        return true;

    }

    
}
