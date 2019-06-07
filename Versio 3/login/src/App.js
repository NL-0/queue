import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faMapMarkedAlt, faExchangeAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Notifications from 'react-notify-toast';

library.add(faMapMarkedAlt, faSignInAlt, faExchangeAlt, faSignOutAlt)

class App extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {

    const { renewSession } = this.props.auth;
    this.timerID = setInterval(() => this.tick(), 2000 );
    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }
//kartta disabled jos ei omaa numeroa muta ei toimi ellei paina jono napissa uudelleen koska sessionstorage..
  kartta() {
   if (!sessionStorage.getItem('omanumero')) {
      return (
      <Button bsStyle="primary" className="btn-margin" onClick={this.goTo.bind(this, 'kartta')}>
        Kartta &nbsp;
        <FontAwesomeIcon icon={faMapMarkedAlt} />
      </Button>
      )
    }
    else {
      return <Button bsStyle="primary" className="btn-primary disabled">
        Kartta &nbsp;
      <FontAwesomeIcon icon={faMapMarkedAlt} />
      </Button>
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  //timer antamaan turha setState että kartta() oleva sessionStorage toimisi
  //pitää löytää parempi keino kun timeri
  tick = () => {
    this.setState({
      turhatimeri: 'turhatimeri',
    })
    
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    let loginStyle = {
      left: '20%',
    }

    return (
      <div className="outer">
        <Notifications options={{zIndex: 200, top: '200px'}} />
        {/* <AppBar position="static" color="default">
            <Toolbar> */}
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              {/* <a href="#1">Queue</a> */}
            </Navbar.Brand>
            {!isAuthenticated() &&
              <React.Fragment>
                <Button bsStyle="primary" className="btn-margin" onClick={this.goTo.bind(this, 'kartta')}
                >Kartta &nbsp;
                <FontAwesomeIcon icon={faMapMarkedAlt} />
                </Button>
  
                <Button bsStyle="primary" className="btn-margin" onClick={this.goTo.bind(this, 'home')}>
                  Jono &nbsp;
                <FontAwesomeIcon icon={faExchangeAlt} />
                </Button>

                <Button bsStyle="success" className="btn-margin" onClick={this.login.bind(this)} style={{ left: '200%' }}>
                  Kirjaudu sisään &nbsp;
                <FontAwesomeIcon icon={faSignInAlt} />
                </Button>
              </React.Fragment>
            }

            {
              isAuthenticated() &&
              <React.Fragment>
                {this.kartta()}  

                <Button bsStyle="primary" className="btn-margin" onClick={this.goTo.bind(this, 'home')}>
                  Jono &nbsp;
                <FontAwesomeIcon icon={faExchangeAlt} />
                </Button>
                <Button id="qsLogoutBtn" bsStyle="danger" className="btn-margin" onClick={this.logout.bind(this)} style={loginStyle}>
                  Kirjaudu ulos &nbsp;
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </Button>
              </React.Fragment>

            }
            {/* </Toolbar>
        </AppBar> */}
          </Navbar.Header>
        </Navbar>
      </div>
    )
  }
}



export default App;
