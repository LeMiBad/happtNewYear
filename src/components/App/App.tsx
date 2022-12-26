import { useStore } from "effector-react"
import { createGlobalStyle } from "styled-components"
import { $currentPage } from "../../store/currentPage"
import Carier from "../Carier/Carier"
import Desktop from "../Desktop/Desktop"
import FinalPage from "../FinalPage/FinalPage"
import GamePage from "../GamePage/GamePage"
import Kitchen from "../Kitchen/Kitchen"
import LastCarier from "../LastCarier/LastCarier"
import LoosePage from "../LoosePage/LoosePage"
import MenuPage from "../MenuPage/MenuPage"
import RecipePage from "../RecipePage/RecipePage"
import RulesPage from "../RulesPage/RulesPage"
import StartPage from "../StartPage/StartPage"
import WinPage from "../WinPage/WinPage"
import './../../font/fonts.css'


const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto';
        user-select: none;
    }
    body {
        width: 100%;
        height: var(--max-height-app);
        position: relative;
        background: radial-gradient(circle, rgba(3,160,151,1) 5%, rgba(32,52,33,1) 85%);
        overflow: hidden;
    }
`

const App = () => {
    const currentPage = useStore($currentPage)
    const pages = [<StartPage/>, <MenuPage/>, <RulesPage/>, <RecipePage/>, <GamePage/>, <LoosePage/>, <WinPage/>, <FinalPage/>, <LastCarier/>, <Carier/>]


    if(window.innerHeight < window.innerWidth) return <Desktop/>


    return (
        <div style={{position: 'absolute', width: '100%', height: '100%', overflow: "hidden"}}>
            <GlobalStyles/>
            {pages[currentPage]}
            <Kitchen/>
        </div>
    )
}

export default App