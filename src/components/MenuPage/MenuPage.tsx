import styled from "styled-components"
import branch from './branch.png'
import salat from './salat.png'
import rulet from './rulet.png'
import alc from './alc.png'
import Button from "../Button/Button"
import { useStore } from "effector-react"
import { $Foods, setPickedFood } from "../../store/currentPage"
import { useEffect } from "react"
import { $levels } from "../../store/Levels"



const StyledMenuPage = styled.div`
    z-index: 10;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.35);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 17%;
    p {
        width: 100%;
        color: white;
        font-family: 'calvinL';
        font-weight: 400;
        font-size: 15px;
    }

    p:nth-child(2) {
        margin-bottom: 20px;
    }
`

const FoodGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
    gap: 20px;
    width: 100%;
    color: #02726B;
`

const FoodItem = styled.button<{active?: boolean}>`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 10px;
    box-sizing: border-box;
    width: 100%;
    height: 75px;
    background: linear-gradient(180deg, ${props => props.active? '#FF8A00' : 'rgba(255,240,193,1)'} 0%, rgba(255,255,255,1) 100%);
    border: 4px solid #FF8A00;
    border-radius: 12px;
    img {
        height: 125%;
    }
    h1 {
        color: #02726B;
        font-family: 'book';
        font-weight: 500;
        text-align: left;
    }
`

const BranchWrapper = styled.div`
    position: relative;
    width: 250px;
    margin-top: 4vh;
    margin-bottom: 16vh;
    img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
    }

    h1 {
        z-index: 10;
        color: white;
        width: 100%;
        height: 85px;
        text-shadow: 2px 2px 0px #541f00;
        position: absolute;
        font-family: 'book';
        font-weight: 400;
        font-size: 55px;
        top: 7px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`


const returnImg = [salat, rulet, alc]

const MenuPage = () => {
    const pickedFood = useStore($Foods)
    const foods = useStore($levels)


    useEffect(() => {
        setPickedFood(-1)
    }, [])


    const foodHandler = (select: number) => {
        if(select === pickedFood) setPickedFood(-1)
        else setPickedFood(select)
    }

    let isOld = false
    foods.forEach(food => { if(food.win) isOld = true })


    return (
        <StyledMenuPage>
            <BranchWrapper>
                <img src={branch} alt='branch'/> 
                <h1>Меню</h1>
            </BranchWrapper>
            <p>Времени у тебя немного, поэтому готовим самое основное.</p>
            <p>Жми на любое блюдо, потом ты сможешь вернуться и выбрать остальные!</p>
            <FoodGroup>
                {foods.map(({name, img, win}, i) => {
                    return !win? <FoodItem active={(i === pickedFood)? true : false} onClick={() => foodHandler(i)} key={i}>
                                    <img src={returnImg[img]} alt={name}/>
                                    <h1>{name}</h1>
                                </FoodItem> : null
                })}
            </FoodGroup>
            {pickedFood !== -1? <div onClick={() => {ym(91822706,'reachGoal','meal')}}><Button id={isOld? 3 : 2}>Далее</Button></div> : <></>}
        </StyledMenuPage>
    )
}

export default MenuPage

function ym(arg0: number, arg1: string, arg2: string) {
}
