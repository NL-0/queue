import React, { Component } from 'react';
import Jono from '.././Components/Jono';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              
              <Jono />
          
            )
        }
        {
          !isAuthenticated() && (
              <div>kartta?  </div>
            //
            )
        }
      </div>
    );
  }
}


//auth alle
//              <h4>
// You are not logged in! Please{' '}
// <a style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}> Log In</a> {' '}to continue.
// </h4>
//
//
export default Home;
