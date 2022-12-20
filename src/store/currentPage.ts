import { createEvent, createStore } from "effector";
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




export const setCurrentPage = createEvent<number>()
export const $currentPage = createStore(0)
    .on(setCurrentPage, (_, id) => id)


const initialRecipe = {
    recipe: [
        [
            [
                {
                    url: eggs,
                    name: 'Яйца вареные',
                    isPicked: false
                },
                {
                    url: potato,
                    name: 'Картошка',
                    isPicked: false
                },
                {
                    url: carrot,
                    name: 'Морковь',
                    isPicked: false
                }
            ],
            [
                {
                    url: goroh,
                    name: 'Зеленый горошек',
                    isPicked: false
                },
                {
                    url: cucumbers,
                    name: 'Соленые огурцы',
                    isPicked: false
                },
                {
                    url: bacon,
                    name: 'Ветчина',
                    isPicked: false
                }
            ],
            [
                {
                    url: grass,
                    name: 'Зелень',
                    isPicked: false
                },
                {
                    url: souse,
                    name: 'Майонез',
                    isPicked: false
                },
                {
                    url: salt,
                    name: 'Соль/перец',
                    isPicked: false
                }
            ],
        ],
        [
            [
                {
                    url: chicken,
                    name: 'Куриное филе',
                    isPicked: false
                },
                {
                    url: mushrooms,
                    name: 'Шампиньоны',
                    isPicked: false
                },
                {
                    url: chezze,
                    name: 'Сыр',
                    isPicked: false
                }
            ],
            [
                {
                    url: oil,
                    name: 'Подсолнечное масло',
                    isPicked: false
                },
                {
                    url: milk,
                    name: 'Молоко',
                    isPicked: false
                },
                {
                    url: spices,
                    name: 'Специи',
                    isPicked: false
                }
            ],
            [
                {
                    url: souse,
                    name: 'Майонез',
                    isPicked: false
                },
                {
                    url: lemon,
                    name: 'Сок половинки лимона',
                    isPicked: false
                },
                {
                    url: leaf,
                    name: 'Измельченный лавровый лист',
                    isPicked: false
                },
            ],
        ],
        [
            [
                {
                    url: vine,
                    name: 'Вино',
                    isPicked: false
                },
                {
                    url: orange,
                    name: 'Апельсины',
                    isPicked: false
                },
                {
                    url: imbir,
                    name: 'Кусочек имбиря',
                    isPicked: false
                }
            ],
            [
                {
                    url: water,
                    name: 'Вода',
                    isPicked: false
                },
                {
                    url: stick,
                    name: 'Палочки корицы',
                    isPicked: false
                },
                {
                    url: flowers,
                    name: 'Бутончики гвоздики',
                    isPicked: false
                }
            ],
            [
                {
                    url: star,
                    name: 'Звездочки бадьяна',
                    isPicked: false
                },
                {
                    url: sugar,
                    name: 'Сахар',
                    isPicked: false
                }
            ],
        ],
    ], 
    hearts: 3,
    svitokCount: 0
}


export const damage = createEvent()
export const pickSvitok = createEvent()
export const pickFood = createEvent<string>()
export const $Recipe = createStore(initialRecipe)
    .on(damage, state => {return {...state, hearts: state.hearts-1}})
    .on(pickSvitok, state => {return {...state, svitokCount: state.svitokCount+1}})
    .on(pickFood, (state, food) => {
        const newState = state.recipe.map(rec => {
            return rec.map(arr => {
                return arr.map(foodItem => {
                    if(foodItem.url === food) {
                        if(foodItem.isPicked) {
                            return {...foodItem}
                        }
                        return {...foodItem, isPicked: true}
                    }
                    else return foodItem
                })
            })
        })


        return {...state, recipe: newState}
    })







export const setPickedFood = createEvent<number>()
export const $Foods = createStore(-1)
    .on(setPickedFood, (_, i) => i)