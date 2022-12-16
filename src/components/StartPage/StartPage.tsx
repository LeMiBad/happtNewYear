import styled from "styled-components"
import { setCurrentPage } from "../../store/currentPage"
import Button from "../Button/Button"
import svitok from './svitok.png'

const StartPageWrapper = styled.div`
    z-index: 10;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.35);
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const SvitokWrapper = styled.div`
    position: relative;
    width: 90%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .svitok {
        position: absolute;
        width: 100%;
        height: 113%;
        max-height: 600px;
    }

    h1 {
        font-family: 'book';
        color: #5E401E;
        z-index: 3;
        font-weight: 500;
        width: 100%;
    }

    h1:nth-child(1) {
        text-align: center;
        margin-bottom: -10px;
        font-size: 32px;
        margin-top: 6vh;
    }

    h1:nth-child(2) {
        margin-top: 0;
        margin-bottom: 20px;
        text-align: center;
        font-size: 24px;
    }

    p {
        font-family: 'calvin';
        color: #5E401E;
        font-size: 13px;
        z-index: 3;
        width: 60%;
        font-size: 12px;
        margin-left: 15px;
        padding-bottom: 10px;
    }
`





const StartPage = () => {
    return (
        <StartPageWrapper>
            <SvitokWrapper>
                <img className="svitok" alt="svitok" src={svitok}></img>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h1>Хо-хо-хо…</h1>
                    <h1>и кастрюля оливье!</h1>
                    <p>Без неё не обойтись в новогоднюю ночь. Особенно, если ждёшь дюжину гостей… а у тебя всего 3 часа, чтобы накрыть на стол 😰</p>
                    <p>Весь год мы помогаем тебе строить карьеру, а сегодня поможем вспомнить рецепты новогодних блюд и получить карьерные советы сразу от N работодателей. Отправляйся собирать ингредиенты и параллельно ловить листочки с советами. Они помогут тебе спланировать карьеру на 2023 год.Приготовь все блюда и собери N-m советов – самые активные игроки получат новогодние подарки от санты FutureToday!</p>
                </div>
            </SvitokWrapper>
            <Button id={1}>Далее</Button>
        </StartPageWrapper>
    )
}

export default StartPage