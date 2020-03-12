var mq = require("mithril-query")
var o = require("ospec")

var RotatingCoin = require("../coin-rotate.js")

o.spec("MyComponent", function() {
    o("things are working", function() {
        var out = mq(RotatingCoin)

        out.should.contain("day")
    })
})