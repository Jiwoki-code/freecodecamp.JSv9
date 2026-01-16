let lunches = [];

function addLunchToEnd(arr, s){
  arr.push(s);
  console.log(s + " added to the end of the lunch menu.");
  return arr;
}

function addLunchToStart(arr, s){
  arr.unshift(s);
  console.log(s + " added to the start of the lunch menu.");
  return arr;
}

function removeLastLunch(arr){
  let poped = arr.pop()
  if (poped != undefined){
    console.log(poped + ' removed from the end of the lunch menu.')
  } else {
    console.log("No lunches to remove.")
  }
  return arr
}

function removeFirstLunch(arr){
  let shifted = arr.shift()
  if (shifted != undefined){
    console.log(shifted + ' removed from the start of the lunch menu.')
  } else {
    console.log("No lunches to remove.")
  }
  return arr
}

function getRandomLunch(arr){
  if (arr.length === 0){
    console.log("No lunches available.")
    return
  }
  let selected = arr[Math.floor(Math.random() * arr.length)];
  console.log("Randomly selected lunch: " + selected)
}

function showLunchMenu(arr){
  if (arr.length != 0){
    console.log("Menu items: " + arr.join(", "))
  } else {
    console.log("The menu is empty.")
  }
}