import styled from "styled-components"
import Button from "../Button/Button"
import Kitchen from "../Kitchen/Kitchen"
import RulesTable from "../RulesTable/RulesTable"


export const StyledWrapper = styled.div<{padding?: string}>`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    ${props => props.padding? `padding: ${props.padding};` : ''}
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const StyledRules = styled.div`
    font-family: 'calvin';
    width: 70%;
    font-size: 14px;
    color: white;
    text-align: inherit;
`


const RulesPage = () => {
    return <>
        <RulesTable>1/3</RulesTable>
        <StyledWrapper padding={'35vh 0 10vh 0'}>
            <StyledRules>Сейчас тебе будет показан список ингредиентов, необходимых для готовки. Когда начнёшь игру, на тебя сверху будет падать множество продуктов. Тебе надо ловить только те, что есть в списке. Рецепт можно снова открыть в ходе игры или смотреть на подсказки на экране.</StyledRules>
            <Button>Далее</Button>
            <Kitchen></Kitchen>
        </StyledWrapper>
    </>
}

export default RulesPage