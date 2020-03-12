import m from 'mithril'

function RotatingCoin() {
    let edgeArray = []
    for(let i=0;i<80;i++){
        edgeArray.push(m('div'))
    }
    return {
    view: () => {
        return m('div', {class:'coin'}, [
            m('div', {class:'coin_front'}), 
            m('div', {class:'coin_edge'}, edgeArray),
            m('div', {class:'coin_back'}),
            m('div', {class: 'coin_shadow'})
        ])
    }
    
    }
}

export default RotatingCoin;
