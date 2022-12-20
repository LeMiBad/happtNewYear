import { useStore } from "effector-react"
import styled from "styled-components"
import { $Player, setPlayer } from "../../store/Player"





const SectorWrapper = styled.div`
position: absolute;
bottom: 4vh;
width: 100%;
display: flex;
`

const Player = styled.img<{hidden?: boolean, vector?: string}>`
width: 25%;
${props => props.vector === 'right'? 'transform: scaleX(-1);' : ''}
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
                if(sec) return <Player vector={vector} key={i} src={(vector === 'middle')? 'https://s3-alpha-sig.figma.com/img/0565/3565/30de1a3dd5ad5d9b733f53cfabeb6db1?Expires=1672012800&Signature=Aq9GkUsvsMi8BeXZshqYnRfIzwTCoKT7UKceGtN6Jipsqs6DgRrdwCIhm2tr-aJ2e9qLFBc0Fk1s6Ul2DvFv~OV4SKhJTH-MgdQKyLUpA21zfaCt2uvypaJp1EDPS0eFBE2en25y0Uix94IO1b9kuex5WkitzAcX-25okUZMzLU9zUuDNKzfYLYL74XBX9Uyk8h5HAJc~c-IOvbjuMBE8IdkDgKSmaX4zoXHlaV17SXkQoOH-F4miYtg4UmyUI7EYyLz~c2ZsrV2wHNO5KhrFdsXcL1SRhiOA1Gk6wJg3d8gRKO3L0kbT7pdZinAZvfvnSYxQVHpnPWBWTVnnPXtmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' : 'https://s3-alpha-sig.figma.com/img/409d/37a7/f8816d4c444966f08927493af6c15a81?Expires=1672012800&Signature=RpOqpeGSylmQiyTX1hHkj4O~NEOIWSTK0-~sxsyTA18Fgb4dRlvw3S3JLGm1Iady1kAIjMyA5veFfqQjZKUWQr1CCYy-I8944DNN7jNil6lRbnyTDSriuCY2-xtfVki0zuVQjrgdBCT~3-Efz0OkqF1BOkdLqOaUvcM04nwEyfbuQASlMzcLNVamu4y69MKBNGw-eKmyXPlhI0p90u-yUyQtK6FZatK209WvsT6zofWhvgC72Fh0JyKgl5IDDXdy~YQjlKjCgLplG~lU-jRskqRfJ4oReptcwl2zIs2Ubmbj0Se1tmIN64DbXik-fAviA3As2Apy-C~Qi-HGC3tq8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}/>
                else return <div key={i} style={{width: '25%'}}></div>
            })}
        </SectorWrapper>
    </>
}

export default PlayerEl