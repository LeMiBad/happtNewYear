import { useStore } from "effector-react"
import styled from "styled-components"
import { $Player, setPlayer } from "../../store/Player"
import stay from './stay.png'
import run from './run.png'




const SectorWrapper = styled.div`
position: absolute;
bottom: 4vh;
width: 100%;
display: flex;
`

const Player = styled.img<{hidden?: boolean, vector?: string}>`
    width: 25%;
    ${props => props.vector === 'right'? '' : 'transform: scaleX(-1);'}
    ${props => props.hidden? 'background-color: rgba(0, 0, 0, 0);' : ''}
`




const PlayerEl = () => {
    const {vector, sector} = useStore($Player)
    

    const getSector = (current: number) => {
        const widthOne = window.innerWidth/4
        if(current < widthOne) return [1, 0, 0, 0]
        else if (current > widthOne && current < widthOne*2) return [0, 1, 0, 0]
        else if (current > widthOne*2 && current < widthOne*3) return [0, 0, 1, 0]
        else if (current > widthOne*3 && current < widthOne*4) return [0, 0, 0, 1]
        return sector
    }

    const moveFunc = (e: any) => {
        if(!e.target.classList.value) return null
        const startX = e.changedTouches[0].screenX


        let currentPos = sector

        // const parent = e.target.parentNode

        const moveFunc = (ev: any) => {
            currentPos = getSector(ev.changedTouches[0].clientX)
            
            if(ev.changedTouches[0].screenX < startX) {
                setPlayer({vector: 'left', sector: currentPos})
            }
            else {
                setPlayer({vector: 'right', sector: currentPos})
            }
        }
        
        e.target.addEventListener('touchmove', moveFunc , {passive: true})
        
        e.target.addEventListener('touchend', (eve: TouchEvent) => {
            setPlayer({vector: 'middle', sector: currentPos})
            e.target.removeEventListener('touchmove', moveFunc)
        })
    }


    return <>
        <SectorWrapper onTouchStart={moveFunc}>
            {sector.map((sec, i) => {
                if(sec) return <Player vector={vector} key={i} src={(vector === 'middle')? stay : run}/>
                else return <div key={i} style={{width: '25%'}}></div>
            })}
        </SectorWrapper>
    </>
}

export default PlayerEl