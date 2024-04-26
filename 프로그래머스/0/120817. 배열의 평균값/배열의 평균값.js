function solution(numbers) {
  let a = 0
  for(let i = 0; i<numbers.length; i++) {
    a += numbers[i]
  }
  let sol = a / numbers.length
  return sol
}