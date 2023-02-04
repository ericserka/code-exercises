const solution = (A) => {
    let count = {}
    for(let n of A){
        count[n] = count[n] ? count[n] + 1 : 1
    }

    const unpaired = Object.keys(count).find(key => count[key] % 2 !== 0)

    return Number(unpaired)
}
