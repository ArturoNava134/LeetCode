class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        if not root:
            return []

        res = []
        stack = [(root, root.val, [root.val])]

        while stack:
            node, current_sum, path = stack.pop()

            if not node.left and not node.right and current_sum == targetSum:
                res.append(path)

            if node.right:
                stack.append((node.right, current_sum + node.right.val, path + [node.right.val]))
            
            if node.left:
                stack.append((node.left, current_sum + node.left.val, path + [node.left.val]))

        return res