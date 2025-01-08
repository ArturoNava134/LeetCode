class Solution(object):
    def isAnagram(s, t):
        #first we can declare our maps
        smap = {}
        tmap = {}
        #then we get the length of both words to discard them if they have different lengths
        slength = len(s)
        tlength = len(t)
        if slength != tlength:
            return False

        # if the length is the same, we can loop through the range of the length of both words.
        for i in range(slength):
            # here we get the current position in both words.
            sPosition = s[i]
            tPosition = t[i]
            # and here we push the characters as keys, and if they aready exist, we add 1 to its value.
            smap[sPosition] = smap.get(sPosition, 0) + 1
            tmap[tPosition] = tmap.get(tPosition, 0) + 1

            print("s: ", sPosition, " t: ", tPosition)

        print(smap, tmap)   

        # here we validate if the maps are equals, we return true, else we return false.
        if (smap == tmap):
            print("true")
            return True
        else:
            print("False")
            return False

    s = "rat"
    t = "car"

    isAnagram(s, t)


