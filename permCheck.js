const solution = (A) => {
    const set = new Set(A), arrLength = A.length

    if (set.size < arrLength || A.some(i => i > arrLength)) {
        return 0
    }
    return 1
}
