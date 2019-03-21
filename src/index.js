module.exports = function check(str, bracketsConfig) {
  // your solution
  arr = str.split('');
  for (i = 0; i < arr.length; i++) {
    for(j = 0; j < bracketsConfig.length; j++) {
      if (arr[i] == bracketsConfig[j][0] && arr[i+1] == bracketsConfig[j][1]) {        
          arr.splice(i, 2);
          i = -1;
          j = 0;             
        }
      }
    }
    return arr.length == 0;
  }

