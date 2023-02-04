const solution = (A, K) => {
    let response = A

    if (!A.length) {
        return []
    }

    for (let i = 0 ; i < K; i++) {
        const lastElement = response.pop()
        response = [lastElement, ...response]
    }

    return response
}
