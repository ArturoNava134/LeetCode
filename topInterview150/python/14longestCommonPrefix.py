class Solution:
    def longestCommonPrefix(strings):
        # First, we initialize an empty list called common_prefix where we will store the common prefix characters.
        common_prefix = []
        # We use zip to iterate over the characters of all strings at the same index.
        # zip stops when the shortest string ends, creating tuples of characters.
        for char_tuple in zip(*strings):
            # We convert the tuple of characters at the current index to a set.
            # If the length of the set is not 1, it means not all characters are the same.
            # In that case, we stop the loop as there is no longer a common prefix.
            if len(set(char_tuple)) != 1:
                break
            # If the characters are the same, we append the character to common_prefix.
            common_prefix.append(char_tuple[0])
        # We join the characters in common_prefix into a string and return the result.
        print(common_prefix)
        return "".join(common_prefix)



    strings = ["flower", "flow", "flight"]

    longestCommonPrefix(strings)
