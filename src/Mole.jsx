import {useEffect} from 'react'
import moleImg from './mole.png' // Well...wherever you stored your moleImg.

function Mole(props){
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={moleImg}
            onClick={props.handleClick} />
        </div>
    )
}
export default Mole;
//This will represent a displayed mole. It ultimately will contain a timer determining the lifespan of a mole. 
//This component will render when displayMole === true