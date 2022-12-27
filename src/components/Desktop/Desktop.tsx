import styled from "styled-components"
import gir from './gir.png'
import logo from './logo.png'
import vetka from './vetka.png'
import snow from './snow.png'
import QRCode from "react-qr-code"


const StyledBackground = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: radial-gradient(circle,rgb(11 255 241) -43%,rgb(0, 38, 36) 46%);
`

const Gir = styled.img`
    width: 100vw;
    position: absolute;
    left: 0;
    top: 0;
`
const Man = styled.img`
    position: absolute;
    width: 426px;
    left: 5%;
    bottom: -383px;
`
const Logo = styled.img`
    position: absolute;
    width: 284px;
    top: 8%;
    left: 5%;
`

const Vetka = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
`

const Snow = styled.img`
    position: absolute;
    width: 100%;
    z-index: -1;
    height: 750px;
    bottom: 0;
    right: 0;
`


const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 5%;
    left: calc(8% + 426px);
    color: white;
    h1 {
        font-family: 'book';
        font-size: 45px;
        margin-left: 19px;
    }
    p {
        font-family: 'calvin';
        font-size: 20px;
        margin-left: 22px;
    }
`

const Desktop = () => {


    console.log(window.location.href)

    return <>
        <StyledBackground>
            <Man alt="man" src="https://s3-alpha-sig.figma.com/img/0565/3565/30de1a3dd5ad5d9b733f53cfabeb6db1?Expires=1672617600&Signature=nDL8veVqOCFdjd~1E15h-6y2RszRFHdR74kv6v9RDVdoI2SxXS~OWrWggBFJ0v6Ttxyplph4Sfq6aYy8xN1O0ZSv6QcbdgS6jiXqRkYLIRyS9VEc0CQ~90eoXDtY0OtCQTQB0lmYcU2thYXNyySsJdsFmyvVEaFwZ3W2V0Q4xcPnLN3fAQYAO4jmYdr3exPlVVtyAquaxKZMLaiPRwRixgVKiMI5CCywzVLcxHWfYZn9xt9OMslWaqQJsr1vsdYNGvuQljAK2tI49avbG71jeUl84y3p-OhzkhDpNt9OSNOwg1t3J-LMBg45mGaXCT~MQf~tfHtB5gXWBIy~rf1qmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></Man>
            <Gir alt="Гирлянда" src={gir}></Gir>
            <Vetka alt='vetka' src={vetka}></Vetka>
            <Logo alt="logo" src={logo}></Logo>
            <Snow alt="snow" src={snow}/>
            <LinkWrapper>
                <h1>ОТКРЫВАЙ ИГРУ С ТЕЛЕФОНА</h1>
                <p>Сканируй QR-код и переходи ловить ингредиенты!<br/> Псс.. в игре тебя ждут приятные карьерные послания <br/>от работодателей и приз от FutureToday</p>
                <div style={{paddingLeft: 10}}>
                <img src="https://qrcod.ru/3b5z.svg" width="250" height="250" alt="12321" />
                {/* <QRCode
                    bgColor="rgba(0,0,0,0)"
                    fgColor='white'

                    style={{
                        width: 250,
                        height: 250
                    }}
                    value={window.location.href}
                /> */}
                </div>
            </LinkWrapper>
        </StyledBackground>
    </>
}

export default Desktop