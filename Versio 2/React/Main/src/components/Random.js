import React, { Component} from 'react'

class Random extends Component {

    constructor(props) {
        super(props)
        this.state = {
            num1: Math.floor(Math.random() * 10) + 1,
            num2: Math.floor(Math.random() * 10) + 1,
            meh: this.props.timer1,
            plus: this.props.plus,
        };

    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick1(), this.state.meh);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick1 = () => {
        this.setState(prevState => {
            return {
                num1: prevState.num1 + this.state.plus
            };
        });
    };

    render() {
        return ( 
            <React.Fragment > 
                {this.state.num1} 
            </React.Fragment>
        )
    }
}

export default Random
