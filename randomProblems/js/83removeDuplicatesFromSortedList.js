// Solution using an array

// var deleteDuplicates = function(head) {
//     let res = [];
//     for (let i = 0; i < head.length; i++) {
//         let currPosition = head[i];
//         console.log(currPosition);
        
//         if (res.includes(currPosition)) {
//             console.log("alreadyInTheResponse");
//         } else {
//             res.push(currPosition);
//             console.log(currPosition, "pushed");
//         }
//     }
//     console.log(res);
//     return res; 
// };


// head = [1,1,2,3,3]

// deleteDuplicates(head);



// solution using a listNode 

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var deleteDuplicates = function(head) {
    if (!head) return null;

    let values = new Set();
    let dummyNode = new ListNode(0);
    dummyNode.next = head;

    let previous = dummyNode;
    let current = head;

    while (current) {
        if (values.has(current.val)) {
            previous.next = current.next;
        } else {
            values.add(current.val);
            previous = current;
        }
        current = current.next;
    }

    return dummyNode.next;
};


let head = new ListNode(1, 
    new ListNode(2, 
    new ListNode(2, 
    new ListNode(3, 
    new ListNode(3, 
    new ListNode(4))))));

let result = deleteDuplicates(head);

while (result) {
console.log(result.val);
result = result.next;
}
// Output: 1 -> 2 -> 3 -> 4
