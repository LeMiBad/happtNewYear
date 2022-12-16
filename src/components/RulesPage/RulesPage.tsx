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

const StyledRules = styled.div`
    font-family: 'calvin';
    width: 70%;
    font-size: 14px;
    color: white;
    text-align: inherit;
`


const RulesPage = () => {
    const [rule, setRule] = useState(0)
    const rules = ['Сейчас тебе будет показан список ингредиентов, необходимых для готовки. Когда начнёшь игру, на тебя сверху будет падать множество продуктов. Тебе надо ловить только те, что есть в списке. Рецепт можно снова открыть в ходе игры или смотреть на подсказки на экране.',
                    'Чтобы поймать нужные ингредиенты, двигай своего персонажа пальцем по нижней части экрана.Не пропускай светящиеся бумажки! В них полезные карьерные послания на грядущий год :)Ясное дело, ты суетишься! Поэтому тебе дано 3 права на ошибку. Пропускать нужные продукты можно.']


    const buttonHandler = () => {
        if(rule === 0) setRule(1)
        else setCurrentPage(3)
    }


    return <>
        <StyledWrapper padding={'35vh 0 15vh 0'}>
            <RulesTable>{`${rule+1}/2`}</RulesTable>
            <StyledRules>{rules[rule]}</StyledRules>
            <div onClick={buttonHandler}><Button id={2}>Далее</Button></div>
        </StyledWrapper>
    </>
}

export default RulesPage