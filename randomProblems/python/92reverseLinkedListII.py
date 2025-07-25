class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        dummyhead = ListNode(next=head)
        pre = dummyhead
        for _ in range(1, left):
            pre = pre.next
        curr = pre.next
        for _ in range(right - left):
            tmp = curr.next   
            curr.next = tmp.next
            tmp.next = pre.next
            pre.next = tmp
        return dummyhead.next