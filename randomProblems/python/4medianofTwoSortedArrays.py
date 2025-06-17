class Solution:
    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:
        A, B = nums1, nums2
        total = len(nums1) + len(nums2)
        half = total // 2

        # Ensure A is the shorter array for efficient binary search
        if len(B) < len(A):
            A, B = B, A

        l, r = 0, len(A) - 1

        while True:
            i = (l + r) // 2
            j = half - i - 2

            # Define the boundary elements for the partitions
            Aleft = A[i] if i >= 0 else float("-infinity")
            Aright = A[i + 1] if (i + 1) < len(A) else float("infinity")
            Bleft = B[j] if j >= 0 else float("-infinity")
            Bright = B[j + 1] if (j + 1) < len(B) else float("infinity")

            # Condition for a valid partition
            if Aleft <= Bright and Bleft <= Aright:
                if total % 2:
                    # Total number of elements is odd
                    return min(Aright, Bright)
                else:
                    # Total number of elements is even
                    # Corrected: Average of the two middle elements
                    return (max(Aleft, Bleft) + min(Aright, Bright)) / 2
            elif Aleft > Bright:
                # Aleft is too large, move partition in A to the left
                r = i - 1
            else: # Bleft > Aright (which implies Aright < Bleft)
                # Aright is too small, move partition in A to the right
                l = i + 1