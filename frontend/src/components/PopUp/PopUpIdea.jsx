import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './PopUpIdea.scss'

export default class PopUp extends Component {
  render() {
    return (
      <div className="PopUpIdea">
        <img src="https://cdn.dribbble.com/users/950779/screenshots/3104839/bulbidea6.gif" alt="Ampoule" className="gif"/>
        
        <h3>Votre idée est lancée !</h3>

          <button 
          className="ButtonPopUp"
          onClick={this.props.close}
          >Retour</button>

        <NavLink to="/3">
          <button 
          className="ButtonPopUp"
          onClick={this.props.close}
          >Accueil</button>
        </NavLink>
      </div>
    )
  }
}
