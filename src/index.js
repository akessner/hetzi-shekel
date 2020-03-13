import m from "mithril";
import RotatingCoin from "./coin-rotate"
const coinArray = [];
const coinNumber= 3;
let coinIndex = 0;
for(let i=0;i<coinNumber;i++) {
    let flipped = Math.random() >= 0.501;
    if(i==0)
    {
        coinArray.push(m(RotatingCoin, {ml:0, mt:0, flip:flipped }))
    } else if (i%5==0){
        coinIndex = 0;
        coinArray.push(m(RotatingCoin, {ml:0, mt:i*coinIndex, flip:flipped }))
    } 
    else {
        coinArray.push(m(RotatingCoin, {ml:coinIndex*80, mt:-150, flip:flipped }))
    }
    coinIndex++
  
}
m.render(document.body, [
   coinArray
]);
