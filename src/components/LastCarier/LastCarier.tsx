import styled from "styled-components"
import sugrob from './sugrob.png'
import man from './man.png'
import Button from "../Button/Button"


const StyledGamePage = styled.div`
    z-index: 10;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.58);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 25px;
    height: 100vh;
    padding: 0 2%;
`

const ImgEl = styled.img<{z: number, top: number, width?: number}>`
    position: absolute;
    z-index: ${props => props.z};
    top: ${props => props.top}vh;
`
const Text = styled.p`
    width: 70%;
    margin: 0 auto;
    color: white;
    font-family: 'calvinL';
    font-weight: 400;
    font-size: 15px;
`

const ButtonWrapper = styled.div`
    width: 80%;
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 28px;
    }
`

const LastCarier = () => {
    return <>
        <StyledGamePage>
            <div style={{height: '45vh', width: 100}}/>
            <ImgEl top={25} z={1} src={sugrob}/>
            <ImgEl top={0} z={2} src={man}/>
            <Text>Карьеру никто не отменял! Внимательно прочитай все послания от компаний.</Text>
            <Text>Работодатели будут ждать тебя в новом 2023 ;)</Text>
            <ButtonWrapper>
                <Button id={9}>Карьерные послания</Button>
            </ButtonWrapper>
        </StyledGamePage>
    </>
}

export default LastCarier