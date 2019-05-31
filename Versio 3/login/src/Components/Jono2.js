import React, { Component } from 'react'
// import Teksti1 from './Teksti1';
import './jono.css';
import Arvio from './Arvio';
import axios from 'axios';

class Jono2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer1: '1000',
      timer2: '100',
      num1: '5',
      num2: '5',
      oma: '0',
      date: new Date(),
      showNotifications: this.showNotifications.bind(this),
      hideperuuta: 'none',
      arvioAika: '5',
      hideLogin: 'block',
      hideOma: 'none',
      hostname: '',
      jono: '1',
      seuraava: '1', 
      tmp: '1',
      timer10: '1',
      timer11: '1',
      timer12: '1',
      timer13: '1',
      timer20: [5],
      timer21: '',
    };

  }

  showNotifications() {
    if(this.n.supported()) this.n.show();
  }


  axiosTest() {
    axios.get('http://192.168.220.139:9595/components/api/server/id/1')
      .then(res => {
        const jotain = res.data;
        this.setState({
          jono: jotain.jono,
          seuraava: jotain.seuraava,
        })
      })
    }


  componentDidMount() {
   // this.timerID = setInterval(() => this.tick(), this.state.timer1)  
    this.timerID = setInterval(  () => this.tick(),  this.state.timer1  );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.axiosTest()

    
    if (this.state.oma === '0') {
      this.setState({
         tmp: parseInt(this.state.num1) + parseInt(this.state.num2),
        arvioAika: (parseInt(this.state.tmp) - parseInt(this.state.num2)) * this.state.timer21
      })
    }
    else {
      this.setState({
        arvioAika: (Number(this.state.oma) - Number(this.state.num2)) * this.state.timer21
      })
    }

    if (Number(this.state.oma) === Number(this.state.num2)) {
      this.showNotifications()
      console.log(this.state.num2)
      alert("Vuoronumero")
    }
    
    if (this.state.jono !== this.state.timer10) {
      this.setState({
        timer12: Date.now(),
        timer13: Math.floor(((this.state.timer11 - this.state.timer12)/1000) % 60),
      })

      this.setState(prevState => ({
        timer20: [...prevState.timer20, this.state.timer13]
     }))
     console.log(this.state.timer20)
    }

    this.setState({
      num1: this.state.jono, 
      num2: this.state.seuraava,
      timer10: this.state.jono,
      timer11: Date.now(),
      timer21: this.keskiarvo(),
    })
    console.log("Timer21: " +this.state.timer21)
};

  keskiarvo() {
    let sum = this.state.timer20.reduce((previous, current) => current += previous);
    let avg = sum / this.state.timer20.length;
    return avg
  }

  aikaArvio() {
    return  <Arvio time={this.state.arvioAika} />
  }


  render() {
    return (
      <div className="outer">
        <br />
         <div className="container">
          <div className="row" align="center">
            <div className="col-6">
            <button type="button" className="btn btn-primary">
            Jonon pituus: <span className="badge badge-light">{this.state.num1}</span>
              </button>
            </div>
            <div className="col-6">
            <button type="button" className="btn btn-success">
            Seuraava: <span className="badge badge-light">{this.state.num2}</span>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-6"></div>
            <div className="col-9"><div className='arvio'>{this.aikaArvio()}</div>
            </div>
            <div className="col-6 col-md-4"></div>
          </div>
          <br />
          <div>
          </div>
        </div>
      </div>
     
    )
  }
}

export default Jono2
