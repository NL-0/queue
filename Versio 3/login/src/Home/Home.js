import React, { Component } from 'react';
// import Jono from '.././Components/Jono';

import '../Components/jono.css';
import Arvio from '../Components/Arvio'
import axios from 'axios';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css'; // optional styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faPlusSquare, faMinusSquare)

class Home extends Component {
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

  login() {
    this.props.auth.login();
  }

  axiosTest() {
    // axios.get('http://192.168.220.139:9595/components/api/server/id/1')
    axios.get(`${this.state.url}`)
       .then(res => {
         const jotain = res.data;
         this.setState({
           jono: jotain.jono,
           seuraava: jotain.seuraava,
           hostname: jotain.hostname,
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
           arvioAika: (parseInt(this.state.tmp) - parseInt(this.state.num2)) * this.state.timer21
        })
      }
      else {
        this.setState({
          arvioAika: (Number(this.state.oma) - Number(this.state.num2)) * this.state.timer21
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
  
      if (this.state.jono !== this.state.timer10) {
        this.setState({
          timer12: Date.now(),
          timer13: Math.floor(((this.state.timer11 - this.state.timer12)/1000) % 60),
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
        timer10: this.state.jono,
        timer11: Date.now(),
        timer21: this.keskiarvo(),
      })
  
  };

  keskiarvo() {
    let sum = this.state.timer20.reduce((previous, current) => current += previous);
    let avg = sum / this.state.timer20.length;
    return avg
  }


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
    const { isAuthenticated } = this.props.auth;

    let peruutaStyle = {
      display: this.state.hideperuuta,
    }

    return (
      <div className="container">

        <div className="outer">
        <br />
         <div className="container">{this.state.hostname}
         <br /><br />
          <div className="row" align="center">
            <div className="col-6">
            <Button type="button" className="btn btn-primary">
            Jonon pituus: <span className="badge badge-light">{this.state.num1}</span>
              </Button>
            </div>
            <div className="col-6">
            <Button type="button" className="btn btn-success">
            Jonon pituus: <span className="badge badge-light">{this.state.num2}</span>
              </Button>
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
       </div>
      
        { isAuthenticated() &&
        <React.Fragment>
            <div align="center">
            <Button type="button" className="btn btn-success">
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
          <Button type="button" className="btn btn-warning" style={peruutaStyle} onClick={this.peruutaNumero}>
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
            //
            )
        }
        </div>
        </div>

    );
  }
}

export default Home;
