const m = require("mithril");
let count = 0;
function FamilyForm() {
  return {
    onremove: () => {
      count = 0;
    },
    view: vnode => {
      return m("div", [
        m("label", { for: "family-size" }, `Count: ${count}`),
        m("input.input[type=text][placeholder=Insert a number]", {
          oninput: function(e) {
            count = e.target.value;
          },
          value: count,
          class: "input-box"
        }),
        m("button", { class: "up-arrow", onclick: increaseCount }, "^"),
        m("button", { class: "down-arrow", onclick: decreaseCount }, "v"),
        m("button", { onclick: submit }, "Submit")
      ]);
    }
  };
}

function increaseCount(event) {
  count++;
}
function decreaseCount(event) {
  count--;
}

function submit(event) {
  console.log("submit the number somehow");
}

module.exports = FamilyForm;
