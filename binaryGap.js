const solution = (N) => {
  const binaryArr = N.toString(2).split('')
  let response = 0
  for (let i = 0; i < binaryArr.length; i++) {
    let count = 0
    if (binaryArr[i] === '1') {
      while(binaryArr[++i] === '0') {
        count++
      }
      if (binaryArr[i] === '1') {
        response = Math.max(response, count)
        i--
      }
    }
  }
  
  return response
}
