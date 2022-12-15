import { useStore } from "effector-react"
import { createGlobalStyle } from "styled-components"
import { $currentPage } from "../../store/currentPage"
import Kitchen from "../Kitchen/Kitchen"
import MenuPage from "../MenuPage/MenuPage"
import RulesPage from "../RulesPage/RulesPage"
import StartPage from "../StartPage/StartPage"
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

const App = () => {
    const currentPage = useStore($currentPage)
    const pages = [<StartPage/>, <RulesPage/>, <MenuPage/>]


    return (
        <>
            <GlobalStyles/>
            {pages[currentPage]}
            <Kitchen/>
        </>
    )
}

export default App