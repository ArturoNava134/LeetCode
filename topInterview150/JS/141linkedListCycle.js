// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

 

// Example 1:


// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:


// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:


// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.
 

// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.
 

var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    
    // Traverse the list with two pointers
    while (fast && fast.next) {
        slow = slow.next; // Move slow pointer one step
        fast = fast.next.next; // Move fast pointer two steps
        
        // If both pointers meet, there is a cycle
        if (slow === fast) {
            console.log(true);
            return true;
        }
    }
    
    // If we reach the end, no cycle exists
    console.log(false);
    return false;
};

let head = [3,2,0,-4];
let pos = 1;

hasCycle(head, pos);