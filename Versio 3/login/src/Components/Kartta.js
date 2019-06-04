import React, { Component } from 'react'
import './jono.css'
import { Link } from 'react-router-dom'

class Kartta extends Component {
    constructor(props) {
        super(props)
       // const { jokuvalue } = this.state;
        this.state = {
            meh: '',
          //  meh2: Math.floor(Math.random() * 10),
            meh2: 'http://192.168.220.139:9595/components/api/server/id/1',
        }
    }

    testiavaan() {
      //  console.log("212121")
        sessionStorage.setItem('jokuvalue', this.state.meh2)
      //  sessionStorage.setItem('value', false)
    }

//vai local storage?
    render() {

        return (

            <div className="outer">
                
                <div>Kartta Tähän</div>

                
                    {/* Toimiva */}
                    {/* Jonoon suoraan kun painaa nappia ja antaa arvon jossa jonon url */}
                    <Link to={'/home'} onClick={() => this.testiavaan()}>Testi nappi</Link>

                </div>
            
        )
    }
}

export default Kartta
