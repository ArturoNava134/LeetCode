# Given the head of a singly linked list, reverse the list, and return the reversed list.

 

# Example 1:


# Input: head = [1,2,3,4,5]
# Output: [5,4,3,2,1]
# Example 2:


# Input: head = [1,2]
# Output: [2,1]
# Example 3:

# Input: head = []
# Output: []
 

# Constraints:

# The number of nodes in the list is the range [0, 5000].
# -5000 <= Node.val <= 5000
 

class ListNode:
    def __init__(self, value=0, next=None):
        self.value = value
        self.next = next

class Solution(object):
    def reverseList(self, head):
        prev = None
        curr = head
        while curr:
            curr.next, prev, curr = prev, curr, curr.next
       
        temp = prev
        while temp:
            print(temp.value, end=" -> ")
            temp = temp.next
        print("None")
        return prev


head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))


solution = Solution()
solution.reverseList(head)
