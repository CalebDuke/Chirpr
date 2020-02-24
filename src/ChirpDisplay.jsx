import React from 'react'

function ChirpDisplay(props){
    return (<React.Fragment>
        <h1>{props.chirp.name}</h1>
    </React.Fragment>)
}

export default ChirpDisplay