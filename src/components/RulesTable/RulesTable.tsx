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
    background: url('https://s3-alpha-sig.figma.com/img/182a/3f05/2ff81258053225efe07d089a89e6c79d?Expires=1672012800&Signature=pTWX2aJ8SD0U3LiZefFwHm3BGN3y9ryxwdKG5LBxs8ISn5Z6sUYyLVvGrxGo-5s4ePu6R57Liu0PKSRkc0N8c127WVzju88U9~6xOAZ8nyhbfPARc8oSWlEwcKlg4Fk1FZw~RKxx860bIdtGpZSSDv6Y0CCklDV~9vConQyJMwDN7Hqyz-DhtP78uzQ4Qd6lyGlm-G0B7Apxw5nhHROr-LTUCNB20P6VZQei3XjpJeVd76Dsw-JrG45hSJhvt-skDBTxYBs~6yMorlDnRL97hTYhSkmDt~3reRsCaizdhjg4HIPnBRCCpM9BnuKu6Bgz7jfE0uh4lCHXaLilHkugTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
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