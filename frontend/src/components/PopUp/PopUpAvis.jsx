import React, { Component } from 'react'
import vote from '../pictures/vote.png'
import './PopUpVote.scss'

export default class PopUp extends Component {
  render() {
    return (
      <div className="PopUpVote">
        <img src={vote} alt="Vote" className="vote"/>
        
        <h3>Merci pour <br/>votre avis !</h3>

          <button 
          className="ButtonPopUp"
          onClick={this.props.close}
          >Retour</button>
          
      </div>
    )
  }
}
