import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './PopUpVote.scss'

export default class PopUp extends Component {
  render() {
    return (
      <div className="PopUpVote">
        <img src="https://gifimage.net/wp-content/uploads/2017/10/megaphone-gif-5.gif" alt="Megaphone" className="gif"/>
        
        <h3>Merci pour votre vote !</h3>

        <NavLink to={`/7/${this.props.index}`}>
          <button 
          className="ButtonPopUp"
          onClick={this.props.close}
          >Voir les résultats</button>
        </NavLink>
      </div>
    )
  }
}
