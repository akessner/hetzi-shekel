const mq = require("mithril-query")
const o = require("ospec")
const {contains} = require( './utils')

const RotatingCoin = require("../coin-rotate.js")

o.spec("RotatingCoin", function() {

    o("view ml sets style of margin-left", function() {
        var out = mq(RotatingCoin, {ml:-10, mt: 20, flip: false}).rootNode.attrs.style;
        o(contains(out, 'margin-left:-10px;')).equals(true)
        
    })
    o("view mt sets style of margin-top", function() {
        var out = mq(RotatingCoin, {ml:-10, mt: 20, flip: false}).rootNode.attrs.style;
        o(contains(out, 'margin-top:20px;')).equals(true)
             
    })
    o("Coin edge has 80 faces", function() {
        var out = mq(RotatingCoin).rootNode.children;
        o(out[1].attrs.className).equals('coin_edge')
        o(out[1].children.length).equals(80)
             
    })

    o("flipped coin's first face is the back", function() {
        var out = mq(RotatingCoin, {flip: true}).rootNode.children;
        o(out[0].attrs.className).equals('coin_front')
            
    })
    o("default coin's first face is the back", function() {
        var out = mq(RotatingCoin).rootNode.children;
        o(out[0].attrs.className).equals('coin_back')
            
    })
})