/*
convert a decimal number to any of the bases: binary, octal or hexadecimal

base can receive the values 2 (binary), 8 (octal) or 16 (hexadecimal)
*/

const solution = (decNumber, base) => {
  const rests = [], digits = '0123456789ABCDEF'
  let convertedNumber = ''

  while (decNumber > 0) {
    const rest = decNumber % base
    rests.push(rest)
    decNumber = Math.floor(decNumber / base)
  }

  while (rests.length > 0) {
    convertedNumber += digits[rests.pop()]
  }

  return convertedNumber
}

console.log(solution(24, 2))
console.log(solution(25, 8))
console.log(solution(26, 16))

