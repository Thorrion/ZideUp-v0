import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './PopUpIdea.scss'

export default class PopUp extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="PopUpIdea">
        <img src="https://cdn.dribbble.com/users/950779/screenshots/3104839/bulbidea6.gif" alt="Ampoule" className="gif"/>
        
        <h3>Votre idée est <br/>remontée, merci !</h3>

        <NavLink to={`/8/${this.props.id}/0`}>
          <button 
          className="ButtonPopUp"
          onClick={this.props.close}
          >Revenir aux <br/>défis</button>
        </NavLink>

        <NavLink to="/4">
          <button 
          className="ButtonPopUp"
          onClick={this.props.close}
          >Revenir à l'accueil</button>
        </NavLink>
        
      </div>
    )
  }
}
