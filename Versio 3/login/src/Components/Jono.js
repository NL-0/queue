import React, { Component } from 'react'
// import Teksti1 from './Teksti1';
import './jono.css';
import Arvio from './Arvio';
import axios from 'axios';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css'; // optional styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Jono extends Component {
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
      hideOma: 'block',
      hostname: '',
      jono: '1',
      seuraava: '1',
      tmp: '1',
      tmp2: '1',
      tmp3: '1',
      jokuValue: '1',
      url: '',
      url1: 'http://192.168.220.139:9595/components/api/server/id/1',
      url2: 'http://192.168.220.139:9595/components/api/server/id/2',
    };

  }

  showNotifications() {
    if(this.n.supported()) this.n.show();
  }


  axiosTest() {
   // axios.get('http://192.168.220.139:9595/components/api/server/id/1')
   axios.get(`${this.state.url}`)
      .then(res => {
        const jotain = res.data;
        this.setState({
          jono: jotain.jono,
          seuraava: jotain.seuraava,
        })
      })
    }


  componentDidMount() {

    if (this.state.jokuValue === '1') {
      this.setState({
        url: this.state.url1,
      })} 
      else {
        this.setState({
          url: this.state.url2,
        })
      }

    //ei toimi
    //this.timerID = setInterval(() => this.tick(), this.state.timer1)  
    //toimii
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
         arvioAika: (parseInt(this.state.tmp) - parseInt(this.state.num2)) * 5
      })
    }
    else {
      this.setState({
        arvioAika: (Number(this.state.oma) - Number(this.state.num2)) * 5
      })
    }

    if (Number(this.state.oma) === Number(this.state.num2)) {
      console.log(this.state.num2)
      toaster.notify(
        <h2>
        Vuoronumero!
        </h2>, {
        duration: 2000
      })
      //alert("Vuoronumero")
    }

    this.setState({
      num1: this.state.jono, 
      num2: this.state.seuraava,
      tmp2: Number(this.state.jono) + 1,
      tmp3: Number(this.state.seuraava),
    })
};


axiosTest2() {
  axios.put(`${this.state.url}`, { 
  id : '1',
  hostname : 'jokuhosti',  
  enabled: '1',
  created: 'date',
  jono: `${this.state.tmp2}`, 
  seuraava: `${this.state.tmp3}` })
  .then(function(response){
      console.log('saved successfully')
    });
  }

  otanumero = () => {

    this.axiosTest2()
    toaster.notify(
      <h2>
      Numero varattu
      </h2>, {
      duration: 2000
    })
       this.setState({
        oma: parseInt(this.state.num1) + parseInt(this.state.num2),
        hideperuuta: 'block',
      }
    )
  }

  peruutaNumero = () => {

    return this.setState({
      oma: '0',
      hideperuuta: 'none',
    })
  }

  aikaArvio() {
    return  <Arvio time={this.state.arvioAika} />
  }
  render() {

    let peruutaStyle = {
       display: this.state.hideperuuta,
     }
    //  let omaStyle = {
    //    display: this.state.hideOma,
    //  }
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
            Jonon pituus: <span className="badge badge-light">{this.state.num2}</span>
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
          <br />
          <div align="center">
            <button type="button" className="btn btn-success">
              Oma numero: <span className="badge badge-light">{this.state.oma}
              </span>
            </button>
          </div>
          <br />
          <br />
          <div align="center">
            <button type="button" className="btn btn-success" onClick={this.otanumero}>
              Ota Numero <span className="badge badge-light">  
              </span>
            </button>
          </div>

        </div>



         {/* <Teksti1 teksti="Oma Numero" divi="teksti2" />
         <br /><br />
         <Teksti1 teksti={this.state.oma} divi="seuraava" />
         <br /><br /> */}

              
            {/* <button className="omanumero" style={omaStyle} onClick={this.otanumero}>Ota Numero</button> */}
            <br />
            <br />
            <button className="peruuta" style={peruutaStyle} onClick={this.peruutaNumero}>Peruuta numero</button>
              
            


       </div>
     )
  }
}

export default Jono
