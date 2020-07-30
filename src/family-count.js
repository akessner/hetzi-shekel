const m = require("mithril");
let count = 0;
function FamilyForm() {
  return {
    onremove: () => {
      count = 0;
    },

    view: vnode => {
      onSubmit = vnode.attrs.onSubmit || onSubmit;
      return m("div", [
        m("label", { for: "family-size" }, `Family Size:`),
        m("input.input[type=text][placeholder=Insert a number]", {
          oninput: function(e) {
            count = e.target.value;
            if (count < 0) count = 0;
            if (count > 100) count = 100;
            if (isNaN(count)) count = 0;
          },
          value: count,
          class: "input-box"
        }),
        m("button", { class: "up-arrow", onclick: increaseCount }, "^"),
        m("button", { class: "down-arrow", onclick: decreaseCount }, "v"),
        m("button", { onclick: submit }, "Submit"),
        m("div", { class: "price" })
      ]);
    }
  };
}

function onSubmit(count) {
  console.log(`animate ${count} coins`);
}

function increaseCount(event) {
  count++;
  if (count > 100) count = 100;
}
function decreaseCount(event) {
  count--;
  if (count < 0) count = 0;
}

function submit(event) {
  onSubmit(count);
  //  troy2: 0.03110348, //JONO Check
  let grams = 31.1034768;

  m.request({
    method: "GET",
    url: "https://data-asg.goldprice.org/dbXRates/USD"
  }).then(function(result) {
    let silverPrice = (result.items[0].xagPrice / grams) * 6.87;
    m.render(
      document.querySelector(".price"),
      `Total Price: $${parseFloat(count * silverPrice).toFixed(2)}`
    );
  });
}

module.exports = FamilyForm;
