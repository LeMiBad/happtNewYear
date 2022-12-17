import styled from "styled-components"
import branch from './branch.png'



const StyledGamePage = styled.div`
    z-index: 10;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.35);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 0 17%;
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
        font-size: 45px;
        left: 10%;
        top: 5vh;
    }
`




const GamePage = () => {


    return (
        <StyledGamePage>
            <BranchWrapper>
                <img src={branch} alt='branch'/>
                <h1>Оливье</h1>
            </BranchWrapper>
        </StyledGamePage>
    )
}

export default GamePage