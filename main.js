let NumberFirst = +prompt('Enter the first number: ')
let NumberSecond = +prompt('Enter the second number: ')
let operand = prompt('Enter the operand (+, -, *, /): ')

switch (operand) {
  case '+': {
    let sum = NumberFirst + NumberSecond
    console.log(sum)
    break
  }
  case '-': {
    let sub = NumberFirst - NumberSecond
    console.log(sub)
    break
  }
  case '/': {
    let div = NumberFirst / NumberSecond
    console.log(div)
    break
  }
  case '*': {
    let mul = NumberFirst * NumberSecond
    console.log(mul)
    break
  }
  case '**': {
    let pow = NumberFirst ** NumberSecond
    console.log(pow)
    break
  }
  case '%': {
    let rem = NumberFirst % NumberSecond
    console.log(rem)
    break
  }

  default: {
    console.log('برو بچه کوچه ای')
  }
}
