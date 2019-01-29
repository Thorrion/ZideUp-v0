import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './PopUpVote.scss'

export default class PopUp extends Component {
  render() {
    return (
      <div className="PopUpVote">
        <img src="https://gifimage.net/wp-content/uploads/2017/10/megaphone-gif-5.gif" alt="Megaphone" className="gif"/>
        
        <h3>Merci pour <br/>votre réponse !</h3>

        {this.props.route ?
          <NavLink to={this.props.route}>
            <button 
            className="ButtonPopUp"
            onClick={this.props.close}
            >Suivant</button>
          </NavLink>
        :
          <NavLink to={`/7/${this.props.id}`}>
            <button 
            className="ButtonPopUp"
            onClick={this.props.close}
            >Suivant</button>
          </NavLink>
        }
        
      </div>
    )
  }
}
