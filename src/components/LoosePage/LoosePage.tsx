import styled from "styled-components"
import { resetStats, setCurrentPage } from "../../store/currentPage"
import { resetDrops } from "../../store/Drops"
import { resetPlayer } from "../../store/Player"
import Button from "../Button/Button"
import branch from '../GamePage/branch.png'
import RedWrapper from "../RedWrapper/RedWrapper"




const StyledGamePage = styled.div`
    z-index: 10;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.35);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100vh;
    padding: 0 17%;
    button {
        min-width: 257px;
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
        width: 80%;
        text-align: center;
        color: white;
        text-shadow: 2px 2px 0px #541f00;
        text-align: center;
        position: absolute;
        font-family: 'book';
        font-weight: 400;
        left: 10%;
    }
`




const LoosePage = () => {

    
    const resetHandler = () => {
        resetStats()
        resetDrops()
        resetPlayer()
    }


    return <>
        <StyledGamePage>
            <BranchWrapper>
                <img src={branch} alt='branch'/>
                <h1 style={{fontSize: '45px', top: '25px'}}>
                    Упс...
                </h1>
            </BranchWrapper>
            <RedWrapper>
                <p>Ты использовал все 3 права на ошибку.</p>
                <p>Но до прихода гостей ещё есть время! Сыграй ещё раз или выбери другое блюдо</p>
            </RedWrapper>
            <div onClick={resetHandler} style={{display: 'flex', flexDirection: 'column', gap: 10, padding: 20}}>
                <Button id={4}>Играть ещё</Button>
                <Button id={1}>Меню</Button>
            </div>
        </StyledGamePage>
    </>
}

export default LoosePage