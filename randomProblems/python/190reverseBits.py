class Solution:
    # @param n, an integer
    # @return an integer
    def reverseBits(n):
        binary_str = bin(n)[2:]
        binary_str = binary_str.zfill(32)
        reversed_binary = binary_str[::-1]
        return int(reversed_binary, 2)

n = 0b00000010100101000001111010011100
print(Solution.reverseBits(n))

