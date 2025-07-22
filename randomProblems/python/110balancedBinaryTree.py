class Solution:
    def __init__(self):
        self.flag = True
    def check(self, root):
        if not root:
            return 0
        left = self.check(root.left)
        right = self.check(root.right)
        if abs(left - right) > 1:
            self.flag = False
        return 1 + max(left, right)
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True
        self.check(root)
        if self.flag:
            return True
        return False
        #huh