// Definition for singly-linked list..
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to convert an array into a linked list 
const arrayToLinkedList = (arr) => {
    let dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
};

var addTwoNumbers = function(l1, l2) {
    // Helper function to recursively add numbers
    const addLists = (node1, node2, carry = 0) => {
        // Base case: if all inputs are null/0, return null
        if (!node1 && !node2 && carry === 0) return null;

        // Get values from nodes (default to 0 if null)
        const val1 = node1 ? node1.val : 0;
        const val2 = node2 ? node2.val : 0;

        // Calculate sum and carry
        const sum = val1 + val2 + carry;
        const newCarry = Math.floor(sum / 10);

        // Create the new node with the current digit
        const newNode = new ListNode(sum % 10);

        // Recursively process the next nodes
        newNode.next = addLists(node1 ? node1.next : null, node2 ? node2.next : null, newCarry);

        return newNode;
    };

    console.log("Input Lists:", l1, l2);
    return addLists(l1, l2);
};

// Convert arrays to linked lists
let l1 = arrayToLinkedList([2,4,3]);
let l2 = arrayToLinkedList([5,6,4]);

// Call the function and print the result as an array
const linkedListToArray = (node) => {
    let result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    return result;
};

let result = addTwoNumbers(l1, l2);
console.log("Result List:", linkedListToArray(result));
