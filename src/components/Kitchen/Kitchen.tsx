import styled from "styled-components"
import snowflakes from './../../icons/snowflakes.png'
import light from './light.png'


const Floor = styled.div`
    position: absolute;
    width: 275vw;
    height: 100vw;
    bottom: -30vh;
    left: -120vw;
    transform: scale(0.6);
    background-size: cover !important;
    background: url('https://user-images.githubusercontent.com/97335217/209583470-d2a1fcab-f101-4ee9-9cf0-51c4691243a6.png');
`

const Tree = styled.div`
    position: absolute;
    width: 100vw;
    height: 140vw;
    left: -50vw;
    bottom: -18vw;
    transform: scale(0.6);
    background-size: cover !important;
    background: url('https://user-images.githubusercontent.com/97335217/209583440-f549b3c6-2b59-4f1b-8bc7-02a53eabf54e.png');
`

const Snowflakes = styled.img<{top?: boolean}>`
    position: absolute;
    z-index: -10;
    width: 166%;
    ${props => props.top? 'top: -34vw;' : 'bottom: 0;'}
    ${props => props.top? 'transform: rotate(180deg) scale(0.6);' : 'transform: scale(0.6);'}
    left: -33%;
    background-size: cover !important;
`

const Kitchen = () => {
    return <>
        <Snowflakes top src={snowflakes}/>
        <Snowflakes src={snowflakes}/>
        <img alt="light" src={light}></img>
        <Floor />
        <Tree />
    </>
}

export default Kitchen