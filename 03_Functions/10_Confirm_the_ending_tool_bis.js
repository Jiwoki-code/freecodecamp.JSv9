function reveser(string) {
  let stringLength = string.length;
  let temp = "";
  let reversedString = "";
  for (let i = 0; i <= stringLength - 1; i++) {
    temp = string[string.length - 1 - i];
    reversedString += temp;
  }
  return reversedString;
}

function confirmEnding (string, checkedString) {
  let stringLength = string.length;
  let checkedStringLength = checkedString.length;

  let reversedString = reveser(string);
  let reversedCheckedString = reveser(checkedString);

  if (reversedString.includes(reversedCheckedString)) {
    //récupère l'index de ma sub string checkedString
    let subStrIndex = reversedString.indexOf(reversedCheckedString);
    let slicedString = reversedString.slice(subStrIndex, checkedStringLength);
    if (reversedCheckedString == slicedString) {
      return true;
    } else { return false;}
  } else {
    return false;
  }
}