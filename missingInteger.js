const solution= (A) => {
    const set = new Set()

    for (let a of A) {
        if (a > 0) {
            set.add(a);
        }
    }
    for (let i = 1; i <= A.length + 1; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
}
