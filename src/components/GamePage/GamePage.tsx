import { useStore } from "effector-react"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { $Foods, $Recipe, resetStats, setCurrentPage } from "../../store/currentPage"
import { $drops, modalDrops, resetDrops } from "../../store/Drops"
import { $levels, makeLevel } from "../../store/Levels"
import Button from "../Button/Button"
import Drop from "../Drop/Drop"
import PlayerEl from "../PlayerEl/PlayerEl"
import RecipePage from "../RecipePage/RecipePage"
import { StyledRules, StyledWrapper } from "../RulesPage/RulesPage"
import RulesTable from "../RulesTable/RulesTable"
import branch from './branch.png'
import logo from './../Desktop/logo.png'
import svitok from './../../icons/foods/svitok.png'
import heart from './heart.png'
import bottle from './bottle.png'
import recip from './recip.png'



const StyledGamePage = styled.div`
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
`

const BranchWrapper = styled.div`
    position: relative;
    width: 250px;
    margin-top: 4vh;
    margin-bottom: 16vh;
    display: flex;

    .logo {
        z-index: 3000;
        width: 40%;
        margin: 5% auto 0 auto;
    }

    h1 {
        z-index: 10;
        width: 100%;
        height: 100%;
        margin-top: 8px;
        text-align: center;
        color: white;
        text-shadow: 2px 2px 0px #541f00;
        text-align: center;
        position: absolute;
        font-family: 'book';
        font-weight: 400;
    }

    .branch {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
    }
`

const RecipeList = styled.div`
    position: absolute;
    top: calc(6vh + 100px);
    right: 4%;
    display: flex;
    flex-direction: column;
`

const ModalButton = styled.button<{img: string, deg: number, h: number, left?: number, pad: number}>`
    position: relative;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0);
    border: 0;
    div {
        position: absolute;
        z-index: 10;
        top: -${props => props.pad}px;
        left: ${props => props.left? `${props.left}px` : '0'};
        width: 40px;
        height: ${props => props.h}px;
        background-size: cover !important;
        background: url(${props => `${props.img}`});
    }
    p {
        position: absolute;
        bottom: 0;
        width: 58px;
        left: -34%;
        color: #603916;
        font-size: 9px;
        background-color: white;
        padding: 3px 2px 0px 2px;
        border: 2px solid #FF8A00;
        border-radius: 10px;
    }
`

const GameVars = styled.div`
    position: absolute;
    top: calc(6vh + 100px);
    left: 4%;
    width: 40px;
    .imgCont {
        display: flex;
        align-items: center;
        h1 {
            height: 100%;
            padding-top: 10px;
            margin-left: 5px;
            font-family: 'book';
            font-size: 36px;
            font-weight: 500;
            color: white;
            text-shadow: 2px 4px 4px #0000005e;
        }
    }
`

const FoodItem = styled.img<{isPicked: boolean}>`
    border: 3px solid #FF8A00;
    width: 25px;
    height: 25px;
    border-radius: 8px;
    padding: 4px;
    margin-top: 5px;
    background-color: ${props => props.isPicked? 'rgba(0, 0, 0, 0.1)' : 'white'};
`

const Modal = styled.div`
    z-index: 10000;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
`

const allFoods = ['Оливье', 'Куриные рулетики', 'Глинтвейн']

                        
const GamePage = () => {
    const {recipe, hearts, svitokCount} = useStore($Recipe)
    const [modal, setModal] = useState(<></>)
    const pickedFood = useStore($Foods)
    const drops = useStore($drops)
    const foods = useStore($levels)
    

    useEffect(() => {
        if(drops.length) {
            const interval = setInterval(() => {
                resetDrops()
            }, drops[pickedFood][drops[pickedFood].length-1].time+100);
        
            return () => clearInterval(interval);
        }
    }, [pickedFood, drops]);

    let isWin = true
    for(let i = 0; i < recipe[pickedFood].flat(1).length; i++) {
        if(!recipe[pickedFood].flat(1)[i].isPicked) isWin = false
    }

    if(isWin) {
        resetStats()
        makeLevel(pickedFood)
        let isOld = 0
        foods.forEach(food => { if(food.win) isOld += 1 })

        setCurrentPage(isOld<3? 6 : 7)
    }
    if(hearts === 0) {setCurrentPage(5)}
    
    const CloseModal = () => {
        resetDrops()
        setModal(<></>)
    }

    const openRules = () => {
        modalDrops()
        setModal(<Modal onClick={CloseModal}>
            <StyledWrapper padding={'35vh 0 15vh 0'}>
                <RulesTable> </RulesTable>
                    <StyledRules>Двигай эльфа влево-вправо в нижней части экрана, чтобы собирать нужные ингредиенты из списка.</StyledRules>
                    <StyledRules>Также не забывай собирать бумажки с посланиями!</StyledRules>
                    <StyledRules>У тебя есть 3 жизни. Чтобы их не потерять, просто не лови лишние предметы.</StyledRules>
                <div><Button id={4}>Хорошо</Button></div>
            </StyledWrapper>
        </Modal>)
    }
    
    const openRecipe = () => {
        modalDrops()
        setModal(<Modal onClick={CloseModal}>
                <RecipePage unButton/>
                <div style={{marginTop: '72vh', zIndex: 100}}><Button id={4}>Понятно</Button></div>
            </Modal>)
    }


    return (
        <StyledGamePage>
            {modal}
            {
                drops.length? drops[pickedFood].map(({url, left, top, time, id, type}) => {
                    return <Drop key={id} time={time} top={top} type={type} left={left} url={url}></Drop>
                }) : <></>
            }
            <BranchWrapper>
                <img className="branch" src={branch} alt='branch'/>
                <h1 style={{fontSize: allFoods[pickedFood] === 'Куриные рулетики'? '25px' : '45px',
                    top: allFoods[pickedFood] === 'Куриные рулетики'? '40px' : '30px'}}>
                    {allFoods[pickedFood]}
                </h1>
                <img className="logo" alt="logo" src={logo}/>
            </BranchWrapper>
            <RecipeList>
                <ModalButton onClick={openRecipe} left={-12} pad={20} h={60} deg={329} img={recip}>
                    <div style={{width: 60, height: 60}}></div>
                    <p>Ингредиенты</p>
                </ModalButton>
                {recipe[pickedFood].flat(1).map((({url, isPicked}) => <FoodItem key={url} isPicked={isPicked} src={url} />))}
            </RecipeList>
            <GameVars>
                <ModalButton onClick={openRules} pad={25} h={52} deg={0} img={bottle}>
                    <div></div>
                    <p>Правила</p>
                </ModalButton>
                <div className="imgCont">
                    <img style={{width: 40, marginTop: 10}} alt={'Свитки'} src={svitok}></img>
                    <h1>{svitokCount}</h1>
                </div>
                <div className="imgCont">
                    <img style={{width: 40, marginTop: 10}} alt={'Жизни'} src={heart}></img>
                    <h1>{hearts}</h1>
                </div>
            </GameVars>
            <PlayerEl/>
        </StyledGamePage>
    )
}

export default GamePage