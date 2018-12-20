import React, { Component } from 'react'
import Ampoule from './picture/light-bulb.png'
import { NavLink } from 'react-router-dom'
import './CatchPhrase.scss'

export default class CatchPhrase extends Component {
  render() {
    return (
      <div className="CatchPhraseContainer">
        <div className="CatchPhraseSection">
          <div className="AmpouleContainer">
            <img src={Ampoule} alt="Ampoule" className="ampouleLogo"/>
          </div>

          <div className="CatchPhrase">
            <p>Zideup vous permet de lancer des défis opérationnels et d'interroger vos équipes sur leurs difficultés ou leurs idées de progrès concernés</p>
          </div>

        </div>

        <NavLink to="3">
          <button className="CatchPhraseButton">Continuer</button>
        </NavLink>
      </div>
    )
  }
}
