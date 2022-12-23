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
    background: url('https://s3-alpha-sig.figma.com/img/a3bb/c21f/89bb51936a93c08c0439bb0530b658af?Expires=1672012800&Signature=VYy-yzNXmwfsIMZs00PTidtbb5ZV4Zra~8JCbRnREm57JWa~tr81X6vcBrgnhCtj20liDWnEnRjZiTn1pQzURMcyb9wfsaUKpgqMx6z~xKg6ZC2vOBCfgyslYPk2kkW2E-b~vso4ye~ijDtCFvZtVYews4ErqY92RLTGdy8IhzkFuJO9KguHwDQeATGruW0wqqyOtLsPZCujrYJB2FCT8q38OmvMFtSmsdoe3nJ5umDEcAcOgLL74Gbt10k8q1HNaH87qYcBXTQ6p70ehssHYyOOdH7XcfujkUdQJ3Xi8u5oAHMTcJqAkQXZezJokiUz~T7o~pHyvUCuYE57IundIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
`

const Tree = styled.div`
    position: absolute;
    width: 100vw;
    height: 140vw;
    left: -50vw;
    bottom: -18vw;
    transform: scale(0.6);
    background-size: cover !important;
    background: url('https://s3-alpha-sig.figma.com/img/edc7/53f5/36bae1c4beb34d737e93642717c2e04f?Expires=1672012800&Signature=GTe6CRPT9NG7LXdkdP1MmX9HYBI~fu18BA7r75HYAurKruyCwny3sGiWgO3bWiBvNWHFqX-oiqxQUd34RVi3-IKTV9ejU9Te3-nSjH6HD-xcmqUTVQYTJP9PS3WlwmDTYwIAn-3wWzBJG0-NpUjYWLSFBI1avW-HaeXp7sO32TbTJki5-1c~Ea9Lo8zw3T8MKlnLyRgjUyaDAXuDd5LulJwQ-sECi7l1i0tDrirvbxWlT2GG5fXgQ50FAaHFEUsgCRm2pyQl~-QBYxT42pbEKqC0LQx1~r-aOeO-wBuoM0UPS8cKB1tGENY0hiBK~S1CLdTEnid1FBHiAogLYfU4LA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
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