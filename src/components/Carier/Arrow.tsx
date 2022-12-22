const Arrow: React.FC<{left?: boolean}> = ({left}) => {
    return <svg style={{transform: left? 'rotate(180deg)' : ''}} width="28" height="50" viewBox="0 0 28 50" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="-2" x2="34.8428" y2="-2" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 25.0986 27.7524)" stroke="#FFEDAF" stroke-width="4"/><line x1="26.5128" y1="23.5594" x2="1.87527" y2="48.197" stroke="#FFEDAF" stroke-width="4"/></svg>
}

export default Arrow