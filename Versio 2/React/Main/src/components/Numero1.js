import React, { Component } from 'react'

  
class Numero1 extends Component {
    render() {
    const { numero1, divi } = this.props
    return <div className={divi}> {numero1}  </div>
  }
}

export default Numero1
