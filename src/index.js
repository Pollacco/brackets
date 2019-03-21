module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr = str.split('');
  for (j = 0; j < bracketsConfig.length; j++){
    i = 0;
    do {
      if (arr[i] == bracketsConfig[j][0] && arr[i + 1] == bracketsConfig[j][1]) {
        arr.splice(i, 2);
        i = 0;
        j = 0;
      } else {
        i++;
      }
    } while (i < arr.length);
  }
  return arr.length == 0;   
}