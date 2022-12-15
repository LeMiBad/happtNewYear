import { createEvent, createStore } from "effector";





export const setCurrentPage = createEvent<number>()
export const $currentPage = createStore(0)
    .on(setCurrentPage, (_, id) => id)
