import { createStore } from "effector";
import bacon from './../icons/foods/bacon.png'
import carrot from './../icons/foods/carrot.png'
import chezze from './../icons/foods/chezze.png'
import chicken from './../icons/foods/chicken.png'
import cucumbers from './../icons/foods/cucumbers.png'
import eggs from './../icons/foods/eggs.png'
import flowers from './../icons/foods/flowers.png'
import goroh from './../icons/foods/goroh.png'
import grass from './../icons/foods/grass.png'
import imbir from './../icons/foods/imbir.png'
import leaf from './../icons/foods/leaf.png'
import lemon from './../icons/foods/lemon.png'
import milk from './../icons/foods/milk.png'
import mushrooms from './../icons/foods/mushrooms.png'
import oil from './../icons/foods/oil.png'
import orange from './../icons/foods/orange.png'
import potato from './../icons/foods/potato.png'
import salt from './../icons/foods/salt.png'
import souse from './../icons/foods/souse.png'
import spices from './../icons/foods/spices.png'
import star from './../icons/foods/star.png'
import stick from './../icons/foods/stick.png'
import sugar from './../icons/foods/sugar.png'
import vine from './../icons/foods/vine.png'
import water from './../icons/foods/water.png'
import svitok from './../icons/foods/svitok.png'

const random = () => Date.now().toString(36) + Math.random().toString(36).substr(2)
const allFoodsArray = [svitok, bacon,carrot,chezze,chicken,cucumbers,eggs,flowers,goroh,grass,imbir,leaf,lemon,milk,mushrooms,oil,orange,potato,salt,souse,spices,star,stick,sugar,vine,water,svitok,
]

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

const recipeArr = [
    [eggs, potato, carrot, goroh, cucumbers, bacon, grass, souse, salt],
    [chicken, mushrooms, chezze, oil, milk, spices, souse, lemon, leaf],
    [vine, orange, imbir, water, stick, flowers, star, sugar],
]
const getStatus = (index: number, element: string) => {
    if(element === svitok) return 'svitok'
    return (recipeArr[index].includes(element)? 'friend' : 'enemy')
}


const dropGenerator = (id: number) => {
    const dropArray = []
    let time = 2000
    let top = 0
    for(let i = 0; i < 50; i++) {
        const randomFood = allFoodsArray[Math.floor(Math.random() * allFoodsArray.length)]
        dropArray.push({
            id: random(),
            type: getStatus(id, randomFood),
            top: top, 
            left: getRandomInt(3),
            time: time,
            url: randomFood 
        })
        time+=1500
        top+=100
    }
    return dropArray
}

const initialDrops = [
    dropGenerator(0),
    dropGenerator(1),
    dropGenerator(2),
]



export const $drops = createStore(initialDrops)


