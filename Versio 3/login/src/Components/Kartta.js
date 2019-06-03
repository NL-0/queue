import React, { Component } from 'react'
import './jono.css'
import { Link } from 'react-router-dom'

class Kartta extends Component {
    constructor(props) {
        super(props)
       // const { jokuvalue } = this.state;
        this.state = {
            meh: '',
            meh2: '20',
        }
    }


    // testiavaan = () => {
    //     return console.log("meh23923")
    // }

    testiavaan() {
        console.log("212121")
        localStorage.setItem('jokuvalue', this.state.meh2);
    }

    


//vai local storage?
    render() {

        return (

            <div className="outer">
                
                <Link to ={{
                    pathname: '/home',
                    aboutProps: {
                        value: 1,
                        //name: 'meh meh meh'
                    },
                    onClick: `${this.testiavaan}`, 
                }}>Meh</Link>
                <div>

                <Link to ={
                    {
                    pathname: '/home',
                    aboutProps: {
                        value: 2,
                        //name: 'meh meh meh'
                    }
                }}>Meh</Link>

                
                    {/* Toimiva */}
                    <Link to={'/home'} onClick={() => this.testiavaan()}>Here</Link>

                </div>
            </div>
        )
    }
}

export default Kartta
