const mq = require("mithril-query");
const o = require("ospec");

const Form = require("../family-count.js");

o.spec("Form ", function() {
  o("when up arrow is pressed, count increases", function() {
    let out = mq(Form);
    o(out.contains("Count: 0")).equals(true);
    out.click(".up-arrow");
    out.redraw();
    o(out.contains("Count: 1")).equals(true);
    out.onremove();
  });

  o("when down arrow is pressed, count decreases", function() {
    let out = mq(Form);
    o(out.contains("Count: 0")).equals(true);
    out.click(".down-arrow");
    out.redraw();
    o(out.contains("Count: -1")).equals(true);
    out.onremove();
  });

  o("when text is entered, count is set", function() {
    let out = mq(Form);
    o(out.contains("Count: 0")).equals(true);
    out.setValue(".input-box", "10");
    out.redraw();
    o(out.contains("Count: 10")).equals(true);
    out.onremove();
  });
});
