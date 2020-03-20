const m = require("mithril");

function Coin() {
  let edgeArray = [];
  for (let i = 0; i < 80; i++) {
    edgeArray.push(m("div"));
  }
  return {
    view: vnode => {
      let marginLeft = vnode.attrs.ml;
      let marginTop = vnode.attrs.mt;
      const flip = vnode.attrs.flip;
      const front = m("div", { class: "coin_front" });
      const back = m("div", { class: "coin_back" });
      const edge = m("div", { class: "coin_edge" }, edgeArray);
      const shadow = m("div", { class: "coin_shadow" });
      let coinShape = flip ? [back, edge, front] : [front, edge, back];
      let coinObject = m(
        "div",
        {
          class: "coin",
          style: `margin-left:${marginLeft}px;margin-top:${marginTop}px;`
        },
        coinShape
      );

      return m("div", [coinObject, shadow]);
    }
  };
}

module.exports = Coin;
