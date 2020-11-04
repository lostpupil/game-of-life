import m from 'mithril'

const root = document.getElementById('app')

const ST = {
    world: [[0,0,0],[0,0,0],[0,0,0]]
}
const Cell = {
    view: () => {
        return m('div.cell')
    }
}

const World = {
    view: () => {
        return m('.world', ST.world.map ( (row) => {
            return m('.row', row.map ( (col) => {
                return m(Cell)
            }))
        }))
    }
}

m.mount(root, World)