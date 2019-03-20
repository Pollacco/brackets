module.exports = function check(str, bracketsConfig) {
  // your solution
  arr = str.split('')
  for (i = 0; i < arr.length; i++) {
    for(j = 0; j < bracketsConfig.length[i]; j++) {
      if (arr.length[i] == bracketsConfig[i][j] && arr.length[i+1] == bracketsConfig[i][j+1]) {        
          arr.splice(i, 2);
          i = 0;
          j = 0;             
      } 
    }
  }
  return arr.length == 0;
}



