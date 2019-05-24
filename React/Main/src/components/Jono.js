import React, { Component } from 'react'
import Teksti1 from './Teksti1';
import './jono.css';
// import Random from './Random';
// import Data from './Data';
import ReactNotifications from 'react-browser-notifications';
import Arvio from './Arvio';
import axios from 'axios';

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
      hideOma: 'none',
      hostname: '',
      jono: '1',
      seuraava: '1',
      tmp: '1',
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
    this.timerID = setInterval(() => this.tick(), this.state.timer1)  
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
      this.showNotifications()
      console.log(this.state.num2)
      alert("Vuoronumero")
    }

    this.setState({
      num1: this.state.jono, 
      num2: this.state.seuraava,
    })
};


  otanumero = () => {
    //   axios.put('http://192.168.220.139:9595/components/api/server/id/1', {
    //     id : '1',
    //     hostname : 'jokuhosti',
    //     enabled : '1',
    //     created : 'data',
    //     jono : `${this.state.jono}`,
    //     seuraava : `${this.state.tmp2}`,
    // }).then(r => console.log(r.status))
    // .catch(e => console.log(e)),
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

  kirjaudu= () => {

    return this.setState({
      hideOma: 'block',
      hideLogin: 'none',
    })
  }

  render() {
   let peruutaStyle = {
      display: this.state.hideperuuta,
    }
    let loginStyle = {
      display: this.state.hideLogin,
    }
    let omaStyle = {
      display: this.state.hideOma,
    }
    return (
      <div className="outer">
        <br />
        <Teksti1 teksti="Montako jonossa" divi="teksti1" />
        <Teksti1 teksti="Seuraava numero" divi="teksti2" />
        <br /><br />
        <Teksti1 teksti={this.state.num1} divi="numero1" />
        <Teksti1 teksti={this.state.num2} divi="numero2" />
        <br />
        <div className='arvio'>{this.aikaArvio()}
        </div>
        <Teksti1 teksti='min' divi="arvio2" />
        <br /><br /><br />
        <Teksti1 teksti="Oma Numero" divi="teksti2" />
        <br /><br />
        <Teksti1 teksti={this.state.oma} divi="seuraava" />
        <br /><br />
    
        <button className="login" style={loginStyle} onClick={this.kirjaudu}>Kirjaudu sisään</button>
        <button className="omanumero" style={omaStyle} onClick={this.otanumero}>Ota Numero</button>
        <br /><br />
        <button className="peruuta" style={peruutaStyle} onClick={this.peruutaNumero}>Peruuta numero</button>
        
        <ReactNotifications
            onRef={ref => (this.n = ref)} // Required
            title="Hey There!" // Required
            body="This is the body"
            icon="icon.png"
            tag="abcdef"
            timeout="20000">
        </ReactNotifications>
      </div>
      
    )
  }
}

export default Jono
