// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"

 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.


var reverseVowels = function(s) {
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let vowelPositions = [];
    const arrayWord = s.split("");
    console.log(arrayWord);
    for(let i = 0; i < arrayWord.length; i++){
        let currentPosition = arrayWord[i];
        console.log(currentPosition);
        if (vowels.includes(currentPosition)){
            console.log("Vowel");
            vowelPositions.push(i);
        }
    }
    let positionsToCompare = 0; 
    let length = vowelPositions.length;
    let division = vowelPositions.length/2;
    console.log("division:", division);
    let j = 0;
    let reducer = vowelPositions.length;
    while (j <= division-1){
        let Lastposition = vowelPositions[reducer-1];
        let firstPosition = vowelPositions[j];
        console.log("first position:", arrayWord[firstPosition]);
        console.log("last position: ", arrayWord[Lastposition]);
        [arrayWord[firstPosition], arrayWord[Lastposition]] = [arrayWord[Lastposition], arrayWord[firstPosition]];
        j++;
        reducer--;
        firstPosition++;
        Lastposition--;
    }
    console.log("positions:", vowelPositions);
    console.log(arrayWord);
    let strOutput = arrayWord.join('');
    console.log(strOutput);
    return strOutput;
};


let s = "IceCreAm";

reverseVowels(s);