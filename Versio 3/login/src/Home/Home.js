import React, { Component } from 'react';
import '../Components/jono.css';
import Arvio from '../Components/Arvio'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import "react-step-progress-bar/styles.css";
import MakeBar from './MakeBar';
import { notify } from 'react-notify-toast';

library.add(faPlusSquare, faMinusSquare)
class Home extends Component {
  constructor(props) {
    super(props)

    // console.log("about2:", props.location)
    this.state = {
      //kuinka usein timer tick
      timer1: '1000',
      //alkuarvot numeroille
      num1: '5',
      num2: '5',
      oma: '0',
      date: new Date(),
      arvioAika: '5',
      //piilota/näytä
      hideperuuta: 'none',
      hideLogin: 'block',
      hideOma: 'block',
      hostname: '',
      jono: '1',
      seuraava: '1',
      id: '',
      tmp: '1',
      //lisää ja poista jonosta varattu numero
      tmp2: '1',
      tmp3: '1',
      tmp4: '1',
      jokuValue: '1',
      //jonojen database url, tarvitsee paremman tavan
      url: '',
      url1: 'http://192.168.220.139:9595/components/api/server/id/1',
      url2: 'http://192.168.220.139:9595/components/api/server/id/2',
      //aikaarvio
      timer10: '1',
      timer11: '1',
      timer12: '1',
      timer13: '1',
      timer20: [5],
      timer21: '',
      bar: '0',
    };

  }

  login() {
    this.props.auth.login();
  }

  //hakee database jonon nimen ja pituuden
  axiosTest() {
    // axios.get('http://192.168.220.139:9595/components/api/server/id/1')
    axios.get(`${this.state.url}`)
      .then(res => {
        const jotain = res.data;
        this.setState({
          jono: jotain.jono,
          seuraava: jotain.seuraava,
          hostname: jotain.hostname,
          id: jotain.id,
        })
      })
  }



  componentDidMount() {
    //Valitse url jonka jonon näyttää
    this.setState({
      url: sessionStorage.getItem('jokuvalue'),
    })


    //ei toimi
    //this.timerID = setInterval(() => this.tick(), this.state.timer1)  
    //toimii
    this.timerID = setInterval(() => this.tick(), this.state.timer1);
  }


  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  tick = () => {
    this.axiosTest()

    if (this.state.oma === '0') {
      this.setState({
        tmp: parseInt(this.state.num1) + parseInt(this.state.num2),
        arvioAika: (parseInt(this.state.tmp) - parseInt(this.state.num2)) * this.state.timer21,
        bar: '0',
      })
    }
    else {
      this.setState({
        arvioAika: (Number(this.state.oma) - Number(this.state.num2)) * this.state.timer21,
        //matematiikka on vaikeeta 
        bar: (this.state.seuraava - this.state.oma) / this.state.seuraava * 100 + 100
      })
    }

    if (Number(this.state.oma) === Number(this.state.num2)) {
      console.log(this.state.num2)
      let myColor = { background: '#FFC107', text: "#FFFFFF" };
      notify.show("Vuoronumero", 'custom', 10000, myColor)
    }

    if (this.state.jono !== this.state.timer10) {
      this.setState({
        timer12: Date.now(),
        timer13: Math.floor(((this.state.timer11 - this.state.timer12) / 1000) % 60),
      })

      this.setState(prevState => ({
        timer20: [...prevState.timer20, this.state.timer13]
      }))
      // console.log(this.state.timer20)
    }

    this.setState({
      num1: this.state.jono,
      num2: this.state.seuraava,
      tmp2: Number(this.state.jono) + 1,
      tmp3: Number(this.state.seuraava),
      tmp4: Number(this.state.jono) - 1,
      timer10: this.state.jono,
      timer11: Date.now(),
      timer21: this.keskiarvo(),

    })
  };

  //keskiarvio ikuisesti kasvavasta arraysta

  keskiarvo() {
    let sum = this.state.timer20.reduce((previous, current) => current += previous);
    let avg = sum / this.state.timer20.length;
    return avg
  }


  //lisää jonoon +1 kun ottaa numeron

  axiosTest2() {
    axios.put(`${this.state.url}`, {
      id: `${this.state.id}`,
      hostname: `${this.state.hostname}`,
      enabled: '1',
      //  created: `${this.state.date}`,
      created: 'date',
      jono: `${this.state.tmp2}`,
      seuraava: `${this.state.tmp3}`
    })
      .then(function (response) {
        console.log('Numero varattu')
      });
  }

  //Poista varattu numero, eli -1 jonoon kun ei parempaa tapaa nyt keksi
  axiosTest3() {
    //console.log(this.state.date)
    axios.put(`${this.state.url}`, {
      id: `${this.state.id}`,
      hostname: `${this.state.hostname}`,
      enabled: '1',
      created: 'date',
      jono: `${this.state.tmp4}`,
      seuraava: `${this.state.tmp3}`
    })
      .then(function (response) {
        console.log('Numero poistettu onnistuneesti')
      });
  }



  otanumero = () => {
    this.axiosTest2()
    let myColor = { background: '#28A745', text: "#FFFFFF" };
    notify.show("Numero varattu", 'custom', 3000, myColor)
    this.setState({
      oma: parseInt(this.state.num1) + parseInt(this.state.num2),
      hideperuuta: 'block',
    }
    )

    sessionStorage.setItem('omanumero', '1')
  }

  peruutaNumero = () => {
    this.axiosTest3()
    let myColor = { background: '#DC3545', text: "#FFFFFF" };
    notify.show("Numero peruttu", 'custom', 3000, myColor)
    sessionStorage.removeItem('omanumero')
    return this.setState({
      oma: '0',
      hideperuuta: 'none',
    })



  }

  //Arvion sekunnin järkevään muotoon

  aikaArvio() {
    return <Arvio time={this.state.arvioAika} />
  }


  render() {
    const { isAuthenticated } = this.props.auth;

    let peruutaStyle = {
      display: this.state.hideperuuta,
    }
    if (sessionStorage.getItem('jokuvalue')) {
      return (
        <div className="container">

          <div className="outer">
            <br />
            <div className="container"><h5>{this.state.hostname}</h5>
              <br />
              <div className="row" align="center">
                <div className="col-6">
                  <Button type="button" className="btn btn-primary">
                    Jonon pituus: <span className="badge badge-light">{this.state.num1}</span>
                  </Button>
                </div>
                <div className="col-6">
                  <Button type="button" className="btn btn-warning">
                    Seuraava: <span className="badge badge-light">{this.state.num2}</span>
                  </Button>
                </div>
              </div>
              <div className="row">
                <div className="col-6"></div>
                <div className="col-9"><div className='arvio'>{this.aikaArvio()}</div>
                </div>
                <div className="col-6 col-md-4"></div>
              </div>
            </div>



            {/* Näytä loput vain jos auth */}
            {isAuthenticated() &&
              <React.Fragment>
                <MakeBar progress={this.state.bar} />
                <br />

                <div align="center">
                  <Button type="button" className="btn btn-info">
                    Oma numero: <span className="badge badge-light">{this.state.oma}
                    </span>
                  </Button>
                </div>
                <br />
                <br />
                <div align="center">
                  <Button type="button" className="btn btn-success" onClick={this.otanumero}>
                    Ota Numero &nbsp; <span className="badge badge-primary">
                    </span>
                    <FontAwesomeIcon icon={faPlusSquare} />
                  </Button>
                </div>
                <br />
                <div align="center">
                  <Button type="button" className="btn btn-danger" style={peruutaStyle} onClick={this.peruutaNumero}>
                    Peruuta numero &nbsp;
                  <FontAwesomeIcon icon={faMinusSquare} />
                  </Button>
                </div>
                <br />
              </React.Fragment>
            }
            {
              !isAuthenticated() && (
                <div></div>
                /* turha */
              )
            }
          </div>
        </div>

      )
    }
    else {
      return (
        <div className="container">

          <div className="outer">
            <div>Jonoa ei valittu</div>
          </div>
        </div>

      )
    }
  }

}

export default Home;
