module.exports = function check(str, bracketsConfig) {
  // your solution
  let bracketsArrow = str.split('');
  // let open = ['[', '(', '{'];
  // let close = [']', ')', '}'];
  let stack = [];
  let bracketsConfig = [];

  for (let i = 0; i < bracketsArrow.length; i++) {
    if (bracketsArrow[i] === '[' ||
    bracketsArrow[i] === '(' ||
    bracketsArrow[i] === '{' )
    stack.push(bracketsArrow[i]);
  }  else if (bracketsArrow[i] === ']' && bracketsArrow[i - 1] === '[' ||
    bracketsArrow[i] === ')' && bracketsArrow[i - 1] === '('||
    bracketsArrow[i] === '}' && bracketsArrow[i - 1] === '}')
    {
      if stack
    }
    stack.pop(bracketsArrow[i - 1]);

  

  console.log(str);
  console.log('stack:' + stack);
}

check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
