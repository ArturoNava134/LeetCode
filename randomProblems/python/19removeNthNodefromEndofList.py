class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        left = dummy
        right = head

        # Move right pointer n steps ahead
        while n > 0 and right:
            right = right.next
            n -= 1
        
        # Move both pointers until right reaches the end
        while right: 
            left = left.next
            right = right.next

        # Remove the nth node from the end
        left.next = left.next.next

        # Return the new head
        return dummy.next
