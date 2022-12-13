// Just one example
import Mole from './Mole'
import React, {useState} from 'react'
import EmptySlot from './EmptySlot.js'

const  MoleContainer =  (props) => {
    let [theMole, setTheMole] = useState(false)
    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }
    let displayMole = theMole ? 
    <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole}/>
    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer


// MoleContainer
// This will be the component that decides which child component is rendered. We will store a
//  Boolean state variable called displayMole here.

// Mole
// This will represent a displayed mole. 
// It ultimately will contain a timer determining the lifespan of a mole. 
// This component will render when displayMole === true

// EmptySlot
// This will represent an empty molehill or an invalid location to click. Much like its sister component, 
// it will have an internal timer to cycle the display. This component will render when displayMole === false