import { useStore } from "effector-react"
import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import { $Player } from "../../store/Player"

const dropAnim = (start: number) => keyframes`
    0% {
        top: ${start}%;
    }

    100% {
        top: 70%
    }
`

const Dropped = styled.img<{pos: number, top: number, time: number}>`
    position: absolute;
    z-index: 1000;
    width: 25%;
    height: 100px;
    left: ${props => props.pos}%;
    animation: ${props => dropAnim(props.top)} ${props => props.time+'ms'} forwards linear;
`


const lefty = [0, 25, 50, 75]

const Drop: React.FC<{time: number, left: number, top: number, url: string}> = ({time, left, top, url}) => {
    const {sector} = useStore($Player)

    const [isChecked, setIsChecked] = useState(false)
    const [isEnd, setIsEnd] = useState(false)


    useEffect(() => {
        if(!isChecked) {
            setTimeout(() => {
                setIsChecked(true)
            }, time)
        }
    }, [sector, isChecked, time])

    useEffect(() => {
        if(!isEnd) { 
            if(isChecked) {
                if (sector[left]) {
                    console.log('Поймал')
                    setIsEnd(true)
                }
                else {
                    console.log('Не поймал')
                    setIsEnd(true)
                }
            }
        }
    }, [isChecked, sector, isEnd, left])

    
    return isEnd? <></> : <Dropped top={-top} time={time} pos={lefty[left]} src={url}/>
}

export default Drop