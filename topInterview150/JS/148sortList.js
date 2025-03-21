var sortList = function(head) {
    // if the list is empty or has only one element, we return it as is
    if (!head || !head.next) return head;

    // we find the middle of the list to split it into two halves
    let middle = findMiddle(head);
    let right = middle.next;
    // we disconnect the left half from the right half
    middle.next = null;

    // we recursively sort both halves
    let left = sortList(head);
    right = sortList(right);

    // we merge the sorted halves
    return mergeLists(left, right);
};

// this function finds the middle node of the list
var findMiddle = function(head) {
    let slow = head, fast = head.next;
    // fast moves two steps while slow moves one step
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // slow ends up in the middle
    return slow;
};

// this function merges two sorted lists
var mergeLists = function(l1, l2) {
    // we create a placeholder node to simplify the merge
    let mergedHead = new ListNode(-1);
    let current = mergedHead;

    // we iterate through both lists until one is empty
    while (l1 && l2) {
        // we add the smaller value to the merged list
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // we add any remaining elements from either list
    current.next = l1 || l2;
    // we return the merged list, skipping the placeholder node
    return mergedHead.next;
};



var ListNode = function(val, next = null) {
    this.val = val;
    this.next = next;
};


var createLinkedList = function(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
};


var linkedListToArray = function(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
};


let headArray = [4, 2, 1, 3];

let head = createLinkedList(headArray);

let sortedHead = sortList(head);

console.log(linkedListToArray(sortedHead)); 



