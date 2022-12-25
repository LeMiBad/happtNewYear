import { useStore } from "effector-react"
import styled from "styled-components"
import { $Foods, $Recipe } from "../../store/currentPage"
import Button from "../Button/Button"
import svitok from './../StartPage/svitok.png'

const StartPageWrapper = styled.div`
    z-index: 10;
    position: absolute;
    padding-top: 5%;
    background-color: rgba(0, 0, 0, 0.35);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SvitokWrapper = styled.div`
    position: relative;
    width: 90%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;

    @media (min-height: 700px) {
        justify-content: center !important;
        margin-bottom: 0px !important;
    }

    .svitok {
        position: absolute;
        width: 100%;
        height: 113%;
        max-height: 506px;
    }

    h1 {
        color: #5E401E;
        z-index: 11;
        font-size: 28px;
        margin-bottom: 5%;
        font-family: 'book';
        font-weight: 600;
    }
    h2 {
        color: #5E401E;
        z-index: 11;
        font-weight: 400;
        margin-top: 15%;
        font-family: 'book';
    }
`

const FoodWrapper = styled.div`
    z-index: 11;
    height: 60%;
    max-height: 390px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2px;
`

const FoodItemWrapper = styled.div`
    max-width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        border-radius: 10px;
        border: 4px solid #BA9364;
        width: 40px;
        padding: 5px;
        height: 40px;
        background-color: white;
    }
    p {
        text-align: center;
        color: #5D401E;
        font-family: 'calvin';
        font-size: 11px;
    }
`




const allFoods = ['Оливье', 'Куриные рулетики', 'Глинтвейн']

const RecipePage: React.FC<{unButton?: boolean}> = ({unButton}) => {
    const {recipe} = useStore($Recipe)
    const pickedFood = useStore($Foods)

    return (
        <StartPageWrapper>
            <SvitokWrapper>
                <img className="svitok" alt="svitok" src={svitok}></img>
                <h2>Ингредиенты</h2>
                <h1>{allFoods[pickedFood]}</h1>
                <FoodWrapper>
                    {recipe[pickedFood].map((row, i) => {
                        return <div key={i} style={{display: 'flex', justifyContent: "space-between"}}>
                            {row.map(({url, name}) => {
                                return <FoodItemWrapper key={url+name}>
                                    <img alt={name} src={url}/>
                                    {name.split(' ').map(word => <p key={word}>{word}</p>)}
                                </FoodItemWrapper>
                            })}
                        </div>
                    })}
                </FoodWrapper>
            </SvitokWrapper>
            {unButton? <></> : <div onClick={() => {ym(91822706,'reachGoal','game')}}><Button id={4}>Далее</Button></div>}
            
        </StartPageWrapper>
    )
}

export default RecipePage

function ym(arg0: number, arg1: string, arg2: string) {
    
}
