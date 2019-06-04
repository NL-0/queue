import React from 'react'
import { ProgressBar } from "react-step-progress-bar";

const MakeBar = props => {
    const { progress } = props;
    //console.log(`${progress}`)

    //Progress bar valittaa muuten turhaan jos alle 0 tai yli 100
    if ( `${progress}` > 100 ) {
        return <div></div>
    }
    else if ( `${progress}` > 0 ) {
        return <ProgressBar percent={progress}           filledBackground="linear-gradient(to right, #007BFF, #FFC107)"/> 
    }
    else {
        return <div></div>
    }
}

export default MakeBar
