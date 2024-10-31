// Given two sparse vectors, compute their dot product
// A sparse vector is a vector that has mostly zero values, you should store the sparse vector
// efficiently and compute the dot product between the two sparse vectors
// Follow up: What if only one of the vectors is sparse?

const tupleSolution = (nums1, nums2) => {
  const sparseVector = (nums) => {
    const res = []

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        res.push([i, nums[i]])
      }
    }

    return res
  }

  const dotProduct = (v1, v2) => {
    let i = 0, j = 0, res = 0

    while (i < v1.length && j < v2.length) {
      const [iIdx, iNum] = v1[i]
      const [jIdx, jNum] = v2[j]

      if (iIdx === jIdx) {
        res += iNum * jNum

        i++
        j++
      }
      else if (iIdx > jIdx) {
        j++
      }
      else {
        i++
      }
    }

    return res
  }

  const v1 = sparseVector(nums1), v2 = sparseVector(nums2)

  console.log(dotProduct(v1, v2))

  return dotProduct(v1, v2)
}

const mapSolution = (nums1, nums2) => {
  const map = new Map()

  for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] !== 0) {
      map.set(i, nums2[i])
    }
  }

  const sparseVector = (nums) => {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        map.set(i, nums[i])
      }
    }

    return map
  }

  const dotProduct = (v1, v2) => {
    let res = 0

    v1.forEach((v1Num, idx) => {
      if (v2.has(idx)) {
        res += v1Num * v2.get(idx)
      }
    })

    return res
  }

  const v1 = sparseVector(nums1), v2 = sparseVector(nums2)

  console.log(dotProduct(v1, v2))

  return dotProduct(v1, v2)
}

tupleSolution([1, 0, 0, 2, 3], [0, 3, 0, 4, 0])
tupleSolution([0, 1, 0, 0, 0], [0, 0, 0, 0, 2])
mapSolution([1, 0, 0, 2, 3], [0, 3, 0, 4, 0])
mapSolution([0, 1, 0, 0, 0], [0, 0, 0, 0, 2])
