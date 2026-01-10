let count = 0;
function cardCounter(card){
  if (card < 7 && card > 1){
    count++;
  } else if (card === 10) {
    count--;
  }
  if (card === "J" || card === "Q" || card === "K" || card === "A"){
    count--;
  }
  return count > 0 ? `${count} Bet` : `${count} Hold`
}