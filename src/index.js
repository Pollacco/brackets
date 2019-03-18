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
    
    else if (bracketsArrow[i] === ']' ||
    bracketsArrow[i] === ')' ||
    bracketsArrow[i] === '}' ) {
      if (!stack.length) {
        return false;
      } else bracketsConfig.push(stack.pop()) //+ bracketsArrow[i];
    }    
  }
    return !stack.length ? true : false;

  console.log(str);
  console.log('stack:' + stack);
}


