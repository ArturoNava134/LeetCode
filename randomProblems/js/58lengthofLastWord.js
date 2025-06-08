var lengthOfLastWord = function(s) {
    // Trim trailing and leading whitespace, then split the string by spaces.
    const words = s.trim().split(' ');
    // Return the length of the last word in the resulting array.
    return words[words.length - 1].length;
};