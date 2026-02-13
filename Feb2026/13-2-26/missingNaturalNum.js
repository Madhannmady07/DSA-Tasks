// GFG - Missing Array number

function missingNum(arr) {
        // code here
        let n = arr.length;
        
        let expectedSum = (n+1)*(n+2)/2;
        
        let actualSum = 0;
        
        for(let i=0; i<n; i++){
            actualSum+=arr[i];
        }
        
        return expectedSum - actualSum;
}