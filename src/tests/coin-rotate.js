const mq = require("mithril-query")
const o = require("ospec")

const RotatingCoin = require("../coin-rotate.js")
console.log(" 1")
o.spec("RotatingCoin", function() {
    console.log(" 2")
    o("has multiple faces", function() {
        console.log("3 test")
        var out = mq(RotatingCoin)
         out.should.have.at.least(80, 'div')
    })
})