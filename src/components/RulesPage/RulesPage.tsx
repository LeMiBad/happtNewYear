import { useState } from "react"
import styled from "styled-components"
import { setCurrentPage } from "../../store/currentPage"
import Button from "../Button/Button"
import RulesTable from "../RulesTable/RulesTable"


export const StyledWrapper = styled.div<{padding?: string}>`
    z-index: 10;
    position: absolute;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    ${props => props.padding? `padding: ${props.padding};` : ''};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.541);
`

export const StyledRules = styled.div`
    font-family: 'calvin';
    width: 80%;
    font-size: 14px;
    color: white;
    text-align: inherit;
    span{
        font-family: 'calvin';
        color: #F4DF98;
    }
`


const RulesPage = () => {
    const [rule, setRule] = useState(0)
    const rulesArr = [<StyledRules>Сейчас тебе будет показан <span>список ингредиентов</span>, необходимых для готовки. Когда начнёшь игру, на тебя сверху будет падать множество продуктов. Тебе надо ловить <span>только те, что есть в списке.</span> Рецепт можно снова открыть в ходе игры или смотреть на подсказки на экране.</StyledRules>,
                        <StyledRules>Чтобы поймать нужные ингредиенты, <span>двигай</span> своего персонажа <span>пальцем по нижней части экрана.</span> <br/><br/>Не пропускай <span>свёрнутые бумажки!</span> В них полезные карьерные послания на грядущий год :)<br/><br/>Ясное дело, ты суетишься! Поэтому тебе дано 3 права на ошибку. Пропускать нужные продукты можно.</StyledRules>]

    const buttonHandler = () => {
        if(rule === 0) setRule(1)
        else setCurrentPage(3)
    }


    return <>
        <StyledWrapper padding={'35vh 0 15vh 0'}>
            <RulesTable>{`${rule+1}/2`}</RulesTable>
            {rulesArr[rule]}
            <div onClick={buttonHandler}><Button id={2}>Далее</Button></div>
        </StyledWrapper>
    </>
}

export default RulesPage