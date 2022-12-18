import { createEvent, createStore } from "effector";


interface IPlayer {
    vector: string
    sector: number[]
}


const initialPlayerState = {
    vector: 'middle',
    sector: [0, 0, 1, 0]
}

export const setPlayer = createEvent<IPlayer>()
export const $Player = createStore(initialPlayerState)
    .on(setPlayer, (_, cur) => cur)