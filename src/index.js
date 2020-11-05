import m from 'mithril';
import chunk from 'lodash/chunk';

import './style.scss';

const root = document.getElementById('app');
const N = 10;

let MAP = []
for (let i = 0; i < N * N; i++) {
    MAP[i] = Math.round(Math.random())
}
const ST = {
    world: chunk(MAP, N)
}

const Cell = {
    oninit: (vn) => {
        // Cell.neighbors(vn)
    },
    neighbors: (vn) => {
        const { world, x, y } = vn.attrs;
        const allPosibleIndexes = [
            [x - 1, y],
            [x, y - 1],
            [x - 1, y - 1],
            [x + 1, y],
            [x, y + 1],
            [x + 1, y + 1],
            [x + 1, y - 1],
            [x - 1, y + 1]
        ];
        let allPosibleValues = [];

        allPosibleIndexes.forEach(([i, j]) => {
            try {
                allPosibleValues.push(world[i][j])
            } catch (err) {
            }
        })
        // window.console.log(allPosibleValues)
        return allPosibleValues.filter(v => v != undefined);
    },
    view: (vn) => {
        const { status } = vn.attrs;
        return m('.cell-wrapper', {
            onclick: () => {
                const {x, y, status} = vn.attrs
                ST.world[x][y] = !status
            }
        },!!status ? m('div.cell.alive') : m('div.cell.dead'))
    }
}

// https://zh.wikipedia.org/wiki/%E5%BA%B7%E5%A8%81%E7%94%9F%E5%91%BD%E6%B8%B8%E6%88%8F
// 当前细胞为存活状态时，当周围的存活细胞低于2个时（不包含2个），该细胞变成死亡状态。（模拟生命数量稀少）
// 当前细胞为存活状态时，当周围有2个或3个存活细胞时，该细胞保持原样。
// 当前细胞为存活状态时，当周围有超过3个存活细胞时，该细胞变成死亡状态。（模拟生命数量过多）
// 当前细胞为死亡状态时，当周围有3个存活细胞时，该细胞变成存活状态。（模拟繁殖）


const World = {
    step: () => {

    },
    view: () => {
        return m('.world', ST.world.map ( (row, x) => {
            return m('.row', row.map ( (col, y) => {
                return m(Cell, {status: col, world: ST.world, x, y})
            }))
        }))
    }
}

const Observer = {
    view: () => {
        return m('div', [

        ])
    }
}

const Universe = {
    view: () => {
        return m('.wrapper', [
            m('h1', "Game Of Life"),
            m(World),
            m(Observer)
        ])
    }
}

m.mount(root, Universe)