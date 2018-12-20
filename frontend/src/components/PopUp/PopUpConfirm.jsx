import React, { Component } from 'react'
import './PopUpConfirm.scss'

export default class PopUp extends Component {
  render() {
    return (
      <div className="PopUpConfirm">
        {/* <img src="https://i.pinimg.com/originals/ef/d5/f6/efd5f625c6523e9627aab47361602de1.gif" alt="Fusée" className="gif"/> */}
        <img src="https://www.rocketlawyer.com/fr/fr/blog/wp-content/uploads/sites/11/2017/11/fus%C3%A9e-homme-affaires-content.jpg" alt="Fusée" className="fusee"/>
        <h3>Etes vous prêt à lancer votre défi ?!</h3>

        <button 
        className="ButtonPopUp"
        onClick={this.props.close}
        >Annuler</button>
        <button 
        className="ButtonPopUp"
        onClick={this.props.confirm}
        >Lancer le défi ?</button>
      </div>
    )
  }
}
