'''
    Time Complexity = O(N^3)
    Space Complexity = O(1)
    
    Where N is the length of the array.   
'''

def isEqual(arr, n, start, end):   
    for i in range(start + 2, end+ 1):

        '''
            If the element at ‘arr’[i] is equal to the element at
            'arr’[i-2] then continue, otherwise, return false.
        '''
        if(arr[i] != arr[i-2]):
            return False
               
    return True

def switchingSubarray(arr, n):   
    ans = 1
    
    for start in range(0, n):    
        for end in range(start + 1, n):    
            res = isEqual(arr, n, start, end)
            
            if res == True:   
                ans = max(ans, end - start + 1 )                
    return ans
