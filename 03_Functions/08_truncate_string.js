function truncateString(s, n){
  let newstring = "";
  if (s.length > n){ 
    for (let i = 0; i < n; i++){
      newstring += s[i]
    }
    newstring += "..."
    return newstring
  }
  return s;
}

truncateString("orhfrkufsf", 3)