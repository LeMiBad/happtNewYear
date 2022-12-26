import styled, { keyframes } from "styled-components"


const enter = keyframes`
    0% {
        top: -70vw;
    }

    100% {
        top: 0;
    }
`


const StyledRulesTable = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${enter} 1s;
    top: 0;
    left: 15vw;
    width: 70vw;
    height: 70vw;
    background-size: cover !important;
    background: url('https://user-images.githubusercontent.com/97335217/209583576-98446a23-1034-484b-8504-8f339283861d.png');
    h1 {
        margin-top: 10vw;
        font-family: 'book';
        font-size: 50px;
        color: #B16D00;
        text-shadow: 2px 2px 2px #541f00;
    }
    h3 {
        text-align: center;
        font-family: 'book';
        font-size: 20px;
        color: #B16D00;
        text-shadow: 2px 2px 2px #541f00;
    }
`







const RulesTable: React.FC<{children: string}> = ({children}) => {
    return (
        <>
            <StyledRulesTable>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <h1>Правила</h1>
                    <h3>{children}</h3>
                </div>
            </StyledRulesTable>
        </>
    )
}

export default RulesTable