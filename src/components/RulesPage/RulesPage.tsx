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
    return <>
        <StyledWrapper padding={'35vh 0 15vh 0'}>
            <RulesTable>1/3</RulesTable>
            <StyledRules>Сейчас тебе будет показан список ингредиентов, необходимых для готовки. Когда начнёшь игру, на тебя сверху будет падать множество продуктов. Тебе надо ловить только те, что есть в списке. Рецепт можно снова открыть в ходе игры или смотреть на подсказки на экране.</StyledRules>
            <Button id={2}>Далее</Button>
        </StyledWrapper>
    </>
}

export default RulesPage