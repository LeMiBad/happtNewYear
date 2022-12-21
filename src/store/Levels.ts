import { createEvent, createStore } from "effector";


interface ILevels {
    name: string
    img: number
    win: boolean
} 

export const makeLevel = createEvent<number>()
export const $levels = createStore<ILevels[]>([{name: 'Оливье', img: 0, win: false},{name: 'Куриные рулетики', img: 1, win: false},{name: 'Глинтвейн', img: 2, win: false}])
    .on(makeLevel, (state, i) => {
        state[i].win = true
        return [...state]
    })