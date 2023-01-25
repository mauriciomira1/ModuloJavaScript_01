function dividir(num) {
  console.log(num)
  if (num % 2 == 0) {
    dividir( num / 2) //chamou a mesma função, ele vai dividir o número até ser um número ímpar
  } else {
    return num
  }
}

dividir (40)