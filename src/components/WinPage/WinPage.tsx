import styled from "styled-components"
import Button from "../Button/Button"
import RedWrapper from "../RedWrapper/RedWrapper"
import lenta from './../../icons/lenta.png'




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
    margin-bottom: 3vh;
    @media (min-height: 700px) {
        margin-top: 4vh !important;
    }
    img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
    }

    h1 {
        z-index: 10;
        width: 100%;
        height: 85px;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;
        text-align: center;
        font-family: 'book';
        font-weight: 400;
        left: 25%;
        text-align: center;
    }
`


const WinPage = () => {
    return <>
        <StyledGamePage>
            <BranchWrapper>
                <img style={{zIndex: -1}} src={lenta} alt='lenta'/>
                <h1 style={{fontSize: '34px', top: '5px'}}>
                    Уровень пройден
                </h1>
            </BranchWrapper>
            <RedWrapper>
                <p>Все ингредиенты собраны, и готовка уже идет! </p>
                <p>Ты можешь приготовить оставшиеся блюда, пока гости не пришли, и получить приз от FutureToday!</p>
                <p>Или отвлечься и построить карьерные планы на будущее 💼 <br/><br/>Читай пойманные карьерные послания от крупных компаний и смотри направления их стажировок! 2023 год обещает быть полным офферов (;</p>
            </RedWrapper>
            <div onClick={() => {ym(91822706,'reachGoal','letters')}}>
                <Button id={9}>Карьерные советы</Button>
            </div>
            <Button id={1}>В меню</Button>
        </StyledGamePage>
    </>
}

export default WinPage

