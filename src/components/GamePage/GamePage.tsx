import { useStore } from "effector-react"
import styled from "styled-components"
import { $Foods, $Recipe } from "../../store/currentPage"
import { $drops } from "../../store/Drops"
import Drop from "../Drop/Drop"
import PlayerEl from "../PlayerEl/PlayerEl"
import branch from './branch.png'



const StyledGamePage = styled.div`
    z-index: 10;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.35);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 0 17%;
`

const BranchWrapper = styled.div`
    position: relative;
    width: 250px;
    margin-top: 4vh;
    margin-bottom: 16vh;
    img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
    }

    h1 {
        z-index: 10;
        width: 80%;
        text-align: center;
        color: white;
        text-shadow: 2px 2px 0px #541f00;
        text-align: center;
        position: absolute;
        font-family: 'book';
        font-weight: 400;
        left: 10%;
    }
`

const RecipeList = styled.div`
    position: absolute;
    top: calc(6vh + 100px);
    right: 4%;
    display: flex;
    flex-direction: column;
`

const ModalButton = styled.button<{img: string, deg: number, h: number, pad: number}>`
    position: relative;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0);
    border: 0;
    div {
        position: absolute;
        z-index: 10;
        top: -${props => props.pad}px;
        left: 0;
        width: 40px;
        height: ${props => props.h}px;
        background-size: cover !important;
        transform: rotate(${props => props.deg}deg);
        background: url(${props => `${props.img}`});
    }
    p {
        position: absolute;
        bottom: 0;
        width: 58px;
        left: -34%;
        color: #603916;
        font-size: 9px;
        background-color: white;
        padding: 3px 2px 0px 2px;
        border: 2px solid #FF8A00;
        border-radius: 10px;
    }
`

const GameVars = styled.div`
    position: absolute;
    top: calc(6vh + 100px);
    left: 4%;
    width: 40px;
    .imgCont {
        display: flex;
        align-items: center;
        h1 {
            height: 100%;
            padding-top: 10px;
            margin-left: 5px;
            font-family: 'book';
            font-size: 36px;
            font-weight: 500;
            color: white;
            text-shadow: 2px 4px 4px #0000005e;
        }
    }
`

const FoodItem = styled.img<{isClear: boolean}>`
    border: 3px solid #FF8A00;
    width: 25px;
    height: 25px;
    border-radius: 8px;
    padding: 4px;
    margin-top: 5px;
    background-color: ${props => props.isClear? 'rgba(0, 0, 0, 0.1)' : 'white'};
`

const allFoods = ['Оливье', 'Куриные рулетики', 'Глинтвейн']

const GamePage = () => {
    const recipe = useStore($Recipe)
    const pickedFood = useStore($Foods)
    const drops = useStore($drops)


    return (
        <StyledGamePage>
            {drops[pickedFood].map(({url, left, top, time, id}) => {
                return <Drop key={id} time={time} top={top} left={left} url={url}></Drop>
            })}
            <BranchWrapper>
                <img src={branch} alt='branch'/>
                <h1 style={{fontSize: allFoods[pickedFood] === 'Куриные рулетики'? '25px' : '45px',
                    top: allFoods[pickedFood] === 'Куриные рулетики'? '40px' : '30px'}}>
                    {allFoods[pickedFood]}
                </h1>
            </BranchWrapper>
            <RecipeList>
                <ModalButton pad={20} h={50} deg={329} img='https://s3-alpha-sig.figma.com/img/fc99/cf21/3e025ea75f9b5b86d17c3e021963f1b2?Expires=1672012800&Signature=UNId7Q4B7UTZlbiDHN0SjlbZ5dpk4a8Tcz1mk5QRqccTmmi7uIA6-538VOZSBAab8RxFgAp~NAl~wHdM010ZfZd7Zb5lBwO5PfuOCddOoRpk8vw8sA1YQgpvHnJfVXh7Gp3f7vETPp-9cpsgvsV6Cky4ZXDcRTVC9Eb30yAFhajrpA3mB-XL-qgs16RpEow0d724kaREYQttBA-swnxZSEoM-lWYpeBbw7n3P931P3B5B4YTivQCiUNOkNonwsWAKMk9fSwkHzGgWLpOlQJ9ZZDYonGZVukcQqbGaiy4AE4YMKlHboNix0ZJUOLfCMDkCQkVU7Wz-68oy-icvsD0ag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'>
                    <div></div>
                    <p>Ингредиенты</p>
                </ModalButton>
                {recipe[pickedFood].flat(1).map((({url}) => <FoodItem key={url} isClear={false} src={url} />))}
            </RecipeList>
            <GameVars>
                <ModalButton pad={25} h={52} deg={0} img="https://s3-alpha-sig.figma.com/img/3b99/48fe/7c379f136d911ad6a786e3e0e2d89574?Expires=1672012800&Signature=XJyRy1fTss1VBHykyPn0mQPfkCzVy1GMUQqRp~7yVf4UUjhgtoMKIIVVXer1rL9mMmJxfs~dJUFxy7yeARpvcc72t18z6lyAktTHrBVepZPPXlvsnst0ti9AA43pi6NmonOYhsQrNesot0l5M8nwNKqtXASRe-rqGz9gH0bCb9wYPGuRUQEY75B0Kl5dccetrxe6gw8n1Oq1NpMjC~PLqCguY~4WqjlPlWpoNlJlieWb2ciEYzq5UEsqTgn~dXQbynZvmptBFwAZ7ialeECnbopm7LDhBZZgHC8KWDD~YxvpcrOTnQSGNW-R1Yppke1bxOq2SVh~g5jOuTjfX0aW9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4">
                    <div></div>
                    <p>Правила</p>
                </ModalButton>
                <div className="imgCont">
                    <img style={{width: 40, marginTop: 10}} alt={'Свитки'} src="https://s3-alpha-sig.figma.com/img/d122/800b/2b8b930a092803916848ebe7265c382f?Expires=1672012800&Signature=mO5hgq6D4Vzmyfw6JOycVFytwoODMyp1LtiPCWP6pMnh5ClQtnTbtYeNJxv-CVAqze~HFWIvl3z7WmCtQ966QEeGbWS--E9SJZG0I7t7A2ga4kq5ci~geHt8bC~eaBnJba5lUr8oYhF32dBzy8qno2-1XHE2pcmiuHiieZDmBhRq80sjqF2aN7EQFxv~Zz1yy5Kf6QVtrkH-rKPkWPM5R4gNYTqfsLuDt66s16~ms4g73dCjSrl8OtUuFf6BbmXT4B-Ma80Kq2XnewmmITG3HXecv888JGhDB4VqdBFg6yj37f9hwQHPhI7k-TNu4ObUoZjd6I12oqNQEYNz1e07tA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
                    <h1>0</h1>
                </div>
                <div className="imgCont">
                    <img style={{width: 40, marginTop: 10}} alt={'Жизни'} src="https://s3-alpha-sig.figma.com/img/af57/95ef/8f65566cb1cb9835b2c7d11ec2f9fa17?Expires=1672012800&Signature=FDN4cH2SBRe~iang0Xc-hpjZM79Onpp~V-7rycKSw99V3KKS09zclvecrp1ay5AS1lQqHWa7Yg3GqVZuTVXP~8Ksu26Za9DH3DciszIVCTgYA7IUQMSLsYX0s90Dz~t5Z6DuGQGikWqhl4F-qORR1ep~31~dQvbbnBQUubzbUB5TrprbBqLovPpaaW7uDjq9anQjd~evAmMUSDIBduTC80hJMnmKoBuErh0D7qakVLRMDEyUpPfRkFL1reaLU8yHuG~S1~FG92tB74BHCycWDi6VHfKoyJ3CW7KuXqKWn5imxsjG~61RRu7HTyk~aWAqYADmwG-Uy7b9bnJ-uBYzhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
                    <h1>3</h1>
                </div>
            </GameVars>
            <PlayerEl/>
        </StyledGamePage>
    )
}

export default GamePage