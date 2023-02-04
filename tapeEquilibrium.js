
const solution = (A) => {
    let sumRight = 0
    for (let i = 1; i < A.length; i++) {
        sumRight+=A[i]
    }
    let sumLeft = 0

    let response = Number.MAX_SAFE_INTEGER;
    
    for (let j = 0; j < A.length - 1; j++) {
        sumLeft += A[j]
        response = Math.min(response, Math.abs(sumLeft - sumRight))
        sumRight -= A[j + 1]
    }

    return response
}
