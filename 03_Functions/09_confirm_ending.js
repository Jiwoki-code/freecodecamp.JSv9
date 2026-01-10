function confirmEnding(string, checkedString){
  let checkLen = checkedString.length;
  let i = 0;
  for (; i <= checkLen ; i++){
    let strChar = string[string.length - (i + 1)]
    let checkChar = checkedString[checkedString.length - (i + 1)]
    if (strChar !== checkChar){
      break;
    }
  }
  return i === checkLen ? true : false
}
console.log(confirmEnding("coucoulolou", "ou"))