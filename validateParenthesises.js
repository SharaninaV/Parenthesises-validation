function validateParenthesises(symbols) {
  let arr = [];
  for (i = 0; i<symbols.length; i++) {
    switch (symbols[i]) {
      case '(': 
      case '[':
      case '{':
        arr.push(symbols[i]);
        break;
      case ')':
         if (arr.pop() !== '(') {
          return false;
         }
        break;
      case ']':
          if (arr.pop() !== '[') {
          return false;
         }
        break;
      case '}':
        if (arr.pop() !== '{') {
          return false;
        }
      break;
    }
  }
  if (arr.length == 0) {
    return true;
  }
  return false;
}