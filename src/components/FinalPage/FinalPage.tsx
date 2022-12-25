import { useState } from "react"
import styled from "styled-components"
import { setCurrentPage } from "../../store/currentPage"
import Button from "../Button/Button"
import RedWrapper from "../RedWrapper/RedWrapper"
import lenta from './../../icons/lenta.png'
import branch from './../MenuPage/branch.png'


const StyledGamePage = styled.div`
    z-index: 10;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.35);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 25px;
    height: 100%;
    padding: 0 2%;
`

const BranchWrapper = styled.div`
    position: relative;
    width: 100vw;
    margin-bottom: 16vh;
    .back {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
    }

    .logo {
        position: absolute;
        z-index: 300;
        left: 32%;
        top: 85px;
        width: 35%;
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

const InputNumber = styled.div`
    position: relative;
    input {
        width: 93%;
        padding: 20px 10px 10px 10px;
        border-radius: 10px;
        border: 0;
        outline: none;
        font-size: 20px;
        user-select: auto;
    }
    p{
        position: absolute;
        top: 4px;
        left: 10px;
        color: #797E8B;
        font-size: 14px;
    }
`

const ButtonWrapper = styled.div<{isClick: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        font-family: 'book';
        color: white;
        text-decoration: underline;
        font-size: 20px;
    }

    button {
        ${props => props.isClick? 'opacity: 0.5;' : ''}
    }
`

const Modal = styled.div`
    position: fixed;
    z-index: 300;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        width: 290px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover !important;
        background: url('https://s3-alpha-sig.figma.com/img/4473/beb7/b2adb16c2a7e2a2cf65e0f4ccd31bbc9?Expires=1672617600&Signature=HXEHcL4QKgPDI1oHRxUXp9Nq06FK6cuLZlYqwX4N4D6P42vth2wWA0ijf4CTnu5WaaEjQI1dfJqyG6sAJjAibSK8IOlLLeSwTenDI4NezSEJ9lKrHfqNPt5C~bDVEBQ6ga6v1NBFGChfvnhN0S5bP0SdXLe4-j0IuUdAzw-vedu~X1nt5TcbZxW9lI7WTCLsyxRHbTEFBh8VdRKJ5tor-1zaxMhp5ZvtSV8m6HB7-WRWZ8nc-1sFEFrmVxRMexyGcTZ65JNzqwY00gPq31o4Nz7LwyraKNrMv885yyBqYNJ4OGxoEd9r8divLPzHQNuPy2HIZ0t2aNjJYCWMNrhogg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
        h1 {
            color: white;
            text-shadow: 2px 2px 0px #541f00;
            font-family: 'book';
            font-weight: 400;
            font-size: 55px;
            width: 38%;
            font-size: 32px;
            text-align: center;
        }
    }
`

const Politick = styled.div<{isClick: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    div {
        ${props => !props.isClick? 'background-color: red;' : ''}
        min-height: 30px;
        min-width: 30px;
        border-radius: 10px;
        border: 2px solid white;
    }
    p {
        font-size: 12px;
        color: white;
        max-height: 30px;
        min-width: 280px;
        span {
            text-decoration: underline;
        }
    }
`


const FinalPage = () => {
    const [number, setNumber] = useState('')
    const [openState, switcher] = useState(false)
    const [isClick, setIsClick] = useState(true)
    
    const handler = () => {
        ym(91822706,'reachGoal','phone')
        if(!isClick) {
            const tok = '5690612734:AAF8XnWgkoZOmEIjiyWfYdHiVZJ7XfgnnuE'
            const chat = '-898675020'
            fetch(`https://api.telegram.org/bot${tok}/sendMessage?chat_id=${chat}&text=${number}`)
            switcher(true)
            setTimeout(() => {
                setCurrentPage(8)
            }, 1500)
        }
    }
    const noHandler = () => {
        setCurrentPage(8)
    }

    const clickHandler = () => {
        if(isClick && number.length) setIsClick(false)
        else setIsClick(true)
    }

    return <>
        {openState? <Modal>
            <div>
                <h1>Номер отправлен</h1>
            </div>
        </Modal> : <></>}
        <StyledGamePage>
            <BranchWrapper>
                <img className="back" src={lenta} alt='lenta'/>
                <h1 style={{fontSize: '34px', top: '5px'}}>
                    Прошу к столу
                </h1>
            </BranchWrapper>
            <RedWrapper>
                <p>Всё накрыто, гости уже начали уплетать таз с оливье и горячий глинтвейн 🔥</p>
                <p>Ты прекрасно справился с не менее горячей задачей.</p>
                <p>Участвуй в розыгрыше килограмма мандаринов! 10 января FutureToday выберет 5 счастливчиков. Оставляй свой номер ниже и участвуй!</p>
            </RedWrapper>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', margin: '0 auto', width: '85%'}}>
                <InputNumber>
                    <input type={'number'} value={number} onChange={e => setNumber(e.currentTarget.value)}/>
                    <p>Номер телефона</p>
                </InputNumber>
                <Politick isClick={isClick}>
                    <div onClick={clickHandler}></div>
                    <p>Я согласен на <span>обработку персональных данных</span> и получение информационных сообщений</p>
                </Politick>
            </div>
            <ButtonWrapper isClick={isClick}>
                <div onClick={handler}><Button id={7}>Отправить</Button></div>
                <p style={{marginTop: 10}} onClick={noHandler}>Не отправлять</p>
            </ButtonWrapper>
        </StyledGamePage>
    </>
}

export default FinalPage

function ym(arg0: number, arg1: string, arg2: string) {
}
