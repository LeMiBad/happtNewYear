import { useStore } from "effector-react"
import { useState } from "react"
import styled from "styled-components"
import { $carier } from "../../store/Carier"
import { setCurrentPage } from "../../store/currentPage"
import { $levels } from "../../store/Levels"
import Button from "../Button/Button"
import lenta from './../../icons/lenta.png'
import Arrow from "./Arrow"
import Cross from "./cross"
import svitok from './svitok.png'


const StyledGamePage = styled.div`
    z-index: 10;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.35);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 15px;
    height: 100%;
    padding: 0 2%;
`

const BranchWrapper = styled.div`
    position: relative;
    width: 100vw;
    margin-bottom: 16vh;
    margin-top: 5vh;
    img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
    }

    h1 {
        z-index: 10;
        width: 50%;
        text-align: center;
        color: white;
        text-align: center;
        position: absolute;
        font-family: 'book';
        font-weight: 400;
        left: 25%;
        text-align: center;
}
`

const Svitok = styled.div`
    position: relative;
    width: 60%;
    margin: 66px 0 60px 0 !important;
    height: 230px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        position: absolute;
        width: 100vw;
        height: 527px;
    }
    .textContainer {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 30;
        width: 100%;
        height: 100%;
        padding-bottom: 65px;
        p {
            font-size: 14px;
            color: #5D401E;
            font-family: 'calvin';
        }
    }
    `
const Author = styled.p`
    font-size: 14px;
    color: #5D401E;
    font-family: 'calvin';
    position: absolute;
    bottom: 15px;
    right: 0;
`

const Nav = styled.div`
    z-index: 1000;
    width: 100%; 
    height: 60px; 
    display: flex;
    justify-content: space-around;
    align-items: center;
    .arrows {
        display: flex;
        align-items: center;
        gap: 6px;
        color: #FFEDAF;
        p{
            font-family: 'calvin';
            font-size: 22px;
        }
    }
`

const Carier = () => {
    const [counter, setCounter] = useState(0)
    const {first, second, all} = useStore($carier)
    // const {svitokCount} = useStore($Recipe)
    const svitokCount = 30
    const foods = useStore($levels)

    let whereLevel = 3
    for(let i = 0; i < foods.length; i++) {
        if(foods[i].win) whereLevel+=1
    }


    let arr = first
    let maxSvit = 30
    
    if(whereLevel < 2) {
        if(maxSvit < 3) maxSvit = 3
        else if(svitokCount > 10) {
            maxSvit = 10
        }
        else maxSvit = svitokCount
    }

    if(whereLevel === 2) {
        arr = second
        if(svitokCount > 10) {
            maxSvit = svitokCount - 10
        }
        else if(svitokCount >= 20) {
            maxSvit = 10
        }

        if(maxSvit < 3) maxSvit = 3 
    }
    else if (whereLevel === 3) {
        arr = all
        maxSvit = svitokCount
        if(maxSvit < 3) maxSvit = 3
    }

    const inc = () => {
        if(counter === maxSvit-1) return
        setCounter(counter+1)
    }

    const dec = () => {
        if(counter === 0) return
        setCounter(counter-1)
    }

    const crossHandler = () => {
        setCurrentPage(1)
    }

    console.log(whereLevel)

    return <>
        <StyledGamePage>
            <BranchWrapper>
                <img src={lenta} alt='lenta'/>
                <h1 style={{fontSize: '34px', top: '5px'}}>
                    Карьерные послания
                </h1>
            </BranchWrapper>
            <Nav>
                <div className="arrows">
                    <div onClick={dec}><Arrow left></Arrow></div>
                    <p>{counter+1}/{maxSvit}</p>
                    <div onClick={inc}><Arrow></Arrow></div>
                </div>
                {(whereLevel === 3)? null : <div onClick={crossHandler}><Cross/></div>}
            </Nav>
            <Svitok>
                <img alt="svitok" src={svitok} />
                <div className='textContainer'>
                    {arr[counter].text.map((text: string) => <p key={text}>{text}</p>)}
                </div>
                <Author>{arr[counter].author}</Author>
            </Svitok>
            <div style={{zIndex: 3000}} onClick={() => {ym(91822706,'reachGoal','click')}}><a style={{textDecoration: 'none'}} target={'blank'} href={arr[counter].url}><Button id={9}>Узнать больше</Button></a></div>
        </StyledGamePage>
    </>
}

export default Carier

function ym(arg0: number, arg1: string, arg2: string) {
}
