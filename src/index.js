import m from "mithril";
import RotatingCoin from "./coin-rotate";
import FamilyForm from "./family-count";

const coinArray = [];
let coinNumber = 5;
let coinIndex = 0;
let coins;

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
    console.log(coins);
    m.render(document.querySelector(".coins"), [coinArray]);
  }, 300 * i);
}
function submit() {
  console.log(coinNumber);
  for (let i = 0; i < coinNumber; i++) {
    if (i % 5 == 0) {
      coinIndex = 0;
    }
    generateCoin(i, coinIndex);
    coinIndex++;
  }
}

function createShekelForm() {
  coins = m("div", { class: "coins" });
  let form = m("div", { class: "family-form" });
  m.render(document.body, [form, coins]);
  m.mount(document.querySelector(".family-form"), FamilyForm);
  submit();
}

createShekelForm();
