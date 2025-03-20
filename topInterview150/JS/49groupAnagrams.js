// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

var groupAnagrams = function(strs) {
    //first we start a hashmap.
    let obj = {};
    // we loop through each word in strs
    for (let i of strs){
        //and create a key for each word. with split we split each character, then we sort it and with join we convert it to a string again.
        let key = i.split('').sort().join('');
        //of obj is undefined, we add the key with the first word. 
        if(!obj[key]){
            obj[key] = [i]
        }else{
            //if a key is found we add to the existing key
            obj[key].push(i);
        }
    }

    console.log('obj: ', obj);
    return(Object.values(obj));
};


let strs = ["eat","tea","tan","ate","nat","bat"];

groupAnagrams(strs);