# my solution:

class Solution(object):
    def mergeTwoLists(list1, list2):
        # we return 0 if some of the list has [0]
        if (list1 == [] and list2 == [0]) or (list1 == [0] and list2 == []):
            res = [0]
            print(res)
            return res
        # or we return a empty array if both list are empty
        elif (list1 == [] and list2 == []):
            res = []
            print (res)
            return res
        else:
            # if both list has numbers, first we merge them using a sum
            mergedList = list1 + list2
            print(mergedList)
            # then we sort them using the sorted function
            sortedList = sorted(mergedList) 
            print(sortedList)
            # and return the added and sorted lists
            return sortedList

    list1 = [1,2,4]
    list2 = [1,3,4]
    mergeTwoLists(list1, list2)


# a solution that works with lists.
   
    def mergeTwoLists2(self, firstList, secondList):
        if not firstList or not secondList:
            return firstList or secondList
        if firstList.val < secondList.val:
            firstList.next = self.mergeTwoLists(firstList.next, secondList)
            return firstList
        else:
            secondList.next = self.mergeTwoLists(firstList, secondList.next)
            return secondList

