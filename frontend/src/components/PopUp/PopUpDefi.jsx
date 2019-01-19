import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './PopUpDefi.scss'

export default class PopUp extends Component {

  componentDidMount = () => {
    // this.closePopUp()
  }

  closePopUp = () => {
    setTimeout(this.props.close, 4000); 
  }
  
  render() {
    return (
      <div className="PopUpDefi">
        <img src="https://i.pinimg.com/originals/ef/d5/f6/efd5f625c6523e9627aab47361602de1.gif" alt="Fusée" className="gif"/>
        
        <h3>Votre défi est lancé ! <br/> Merci !</h3>

        <NavLink to="/3">
          <button 
          className="ButtonPopUp"
          onClick={this.props.close}
          >Revenir à l'accueil</button>
        </NavLink>
      </div>
    )
  }
}
