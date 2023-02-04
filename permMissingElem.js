const solution = (A) => {
    const len = A.length
    let total = 0;
    for (let n of A) {
        total+= n
    }
    const pasn = ((len + 1)*(1 + len + 1))/2
    return pasn - total
}
