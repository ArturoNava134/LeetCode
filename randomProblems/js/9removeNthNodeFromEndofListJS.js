var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let first = dummy, second = dummy;

    for (let i = 0; i <= n; i++) {
        second = second.next;
    }

    while (second) {
        first = first.next;
        second = second.next;
    }

    first.next = first.next.next;
    return dummy.next;
};