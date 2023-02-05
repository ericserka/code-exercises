const solution = (X, A) => {
    let response = -1
    const leaves = new Set()
    for (let i = 0 ; i < A.length; i++) {
        leaves.add(A[i])
        if (leaves.size === X) {
            response = i
            break
        }
    }
    return response
}
