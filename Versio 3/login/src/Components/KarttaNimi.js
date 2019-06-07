import React, { Component } from 'react'

class KarttaNimi extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            kartta: 'Kartta',
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.state.kartta}&nbsp;
            </React.Fragment>
        )
    }
}

export default KarttaNimi
