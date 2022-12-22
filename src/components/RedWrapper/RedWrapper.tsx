import React from "react"
import styled from "styled-components"
import logo from './../../icons/logo.png'



const StyledRedWrapper = styled.div`
    padding: 4px;
    border-radius: 20px;
    background: linear-gradient(146deg, rgba(248,31,31,1) 0%, rgba(246,69,69,1) 11%, rgba(251,175,175,1) 24%, rgba(251,59,59,1) 54%, rgba(251,175,175,1) 67%, rgba(251,61,61,1) 81%, rgba(250,41,41,1) 97%, rgba(250,33,33,1) 100%);
`

const StyledItem = styled.div`
    position: relative;
    width: 80vw; 
    border-radius: 20px;
    box-sizing: border-box;
    padding: 10%;
    background: linear-gradient(146deg, rgba(1,83,79,1) 0%, rgba(0,117,111,1) 48%, rgba(0,72,69,1) 100%);
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
        font-family: 'calvinLight';
        font-size: 16px;
        color: #FFEDAF;
    }
    img {
        left: 35%;
        top: 3px;
        width: 30%;
        position: absolute;
    }
`




const RedWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <>
        <StyledRedWrapper>
            <StyledItem>
                <img alt="logo" src={logo}></img>
                {children}
            </StyledItem>
        </StyledRedWrapper>
    </>
}

export default RedWrapper