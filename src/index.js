import m from 'mithril';
import chunk from 'lodash/chunk';
import fill from 'lodash/fill';
import './style.scss';

let timer;
const root = document.getElementById('app');
const N = 50;
const ST = {
    world: chunk(fill(Array(N*N), 0), N)
}

const Cell = {
    neighbors: (x, y) => {
        const allPosibleIndexes = [
            [x-1, y-1],
            [x-1, y],
            [x-1, y+1],
            [x, y-1],
            [x, y+1],
            [x+1, y-1],
            [x+1, y],
            [x+1, y+1],
        ];
        let allPosibleValues = [];

        allPosibleIndexes.forEach(([i, j]) => {
            try {
                allPosibleValues.push(ST.world[i][j])
            } catch (err) {
                allPosibleValues.push(0)
            }
        })
        return allPosibleValues.filter(v => v != undefined);
    },
    view: (vn) => {
        const { status } = vn.attrs;
        return m('.cell-wrapper', {
            onclick: () => {
                const {x, y, status} = vn.attrs
                ST.world[x][y] = status === 1 ? 0 : 1
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
        const next = ST.world.map( (row, x) => {
            return row.map( (col, y) => {
                const res = Cell.neighbors(x, y)
                const a_cnt = res.filter( i => i === 1 ).length
                if (col === 0) {
                    if (a_cnt === 3) {
                        return 1
                    }
                    return 0
                } else {
                    if (a_cnt === 2 || a_cnt === 3) {
                        return 1
                    }
                    return 0
                }
            })
        })
        
        ST.world = next
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
        return m('div.observer', [
            m('button', {
                onclick: () => {
                    ST.world =  ST.world.map( x => x.map ( (y) => Math.round(Math.random())))
                }
            }, 'RANDOM'),
            m('button', {
                onclick: () => World.step()
            }, 'STEP'),
            m('button', {
                onclick: () => {
                    if(timer){
                        clearInterval(timer);
                        timer = null
                    } else {
                        timer = setInterval(() => {
                            World.step()
                            m.redraw()
                        }, 500);
                    }
                }
            }, 'AUTO'),
            m('button', {
                onclick: () => {
                   ST.world =  ST.world.map( x => x.map ( (y) => 0))
                   if (timer) {
                       clearInterval(timer)
                       timer = null
                   }
                }
            }, 'CLEAR')
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