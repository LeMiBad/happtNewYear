import styled from "styled-components"
import { setCurrentPage } from "../../store/currentPage"

const ButtonWrapper = styled.div`
    padding: 10px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: linear-gradient(138deg, rgba(255,138,0,1) 0%, rgba(255,190,114,1) 50%, rgba(255,141,7,1) 100%);;
`
const StyledButton = styled.button`
    font-family: 'book';
    font-size: 32px;
    padding: 10px 50px;
    box-sizing: border-box;
    border: 0;
    min-width: 212px;
    white-space: nowrap;
    border-radius: 5px;
    color: white;
    background: linear-gradient(138deg, rgba(255,190,114,1) 0%, rgba(255,138,0,1) 50%, rgba(255,190,114,1) 100%);;
`


const Button: React.FC<{children: string, id: number}> = ({children, id}) => {
    return <ButtonWrapper onClick={() => setCurrentPage(id)}> <StyledButton>{children}</StyledButton> </ButtonWrapper>
}

export default Button