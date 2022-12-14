import { createGlobalStyle } from "styled-components"
import RulesPage from "../RulesPage/RulesPage"
import './../../font/fonts.css'


const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto';
    }
    body {
        width: 100%;
        height: 100vh;
        background: radial-gradient(circle, rgba(3,160,151,1) 5%, rgba(32,52,33,1) 85%);
        overflow: hidden;
    }
`

// const Vetv = styled.div`
//     position: absolute;
//     overflow: hidden;
//     width: calc(100vw + 100px);
//     left: -100px;
//     height: 52vh;
//     bottom: -20%;
//     background-size: cover !important;
//     background: url('https://s3-alpha-sig.figma.com/img/9b73/3b9d/e1aa70d88dc2e2c8b304aaf38fdd6b46?Expires=1672012800&Signature=kUZ7-C5GP4yAfKcVn5L5VU7T6K5G~--VrYcaf-ilAy-0xhA94e-R9fSBw6JBzx~vNabfTjZuFwYKkvNjkndFviCeW4TIlE2yosAVRxjKSORKZJ0QL~-zPqAZhl0HLAVpj3upjKMfYnlMXQtG-mBD~WTN2M-d3sL0S1~fV2kLb8usfRt5qCD3N9bfnMkV9GgaqJFqtPj-Hyl-0BTeTSiA9STBQgpXuyKgmBYje5geS6kaYBzeoszzZaOYjGJbvUxzcwLTe1wqJ-M~yj7lhzliPm7xz2Zc9ENdzSq13Z~cCGoRJM27xVndoS41W0Z0a00SPypC0Av46lS3Kjxn2txLWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
// `


const App = () => {
    return (
        <>
            <GlobalStyles/>
            <RulesPage></RulesPage>
        </>
    )
}

export default App