import m from "mithril";
import RotatingCoin from "./coin-rotate";
const coinArray = [];
const coinNumber = 100;
let coinIndex = 0;

/// 12345 , 678910, 1112131415, 1617181920
//  2122232425,

function generateCoin(i, coinIndex) {
  setTimeout(() => {
    const col = parseInt(i / 5);
    const row = parseInt(i / 20);
    const rowOffset = row * 75;
    const topValue = rowOffset - coinIndex * 2;
    const leftValue = (col % 4) * 110;
    let flipped = Math.random() >= 0.501;

    coinArray.push(
      m(RotatingCoin, { ml: leftValue, mt: topValue, flip: flipped })
    );

    m.render(document.body, [coinArray]);
  }, 300 * i);
}

for (let i = 0; i < coinNumber; i++) {
  if (i % 5 == 0) {
    coinIndex = 0;
  }
  generateCoin(i, coinIndex);
  coinIndex++;
}
