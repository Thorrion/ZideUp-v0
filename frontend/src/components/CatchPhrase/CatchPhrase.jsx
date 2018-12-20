import React, { Component } from 'react'
import Ampoule from './picture/light-bulb.png'
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

        <button className="CatchPhraseButton">Continuer</button>
        
      </div>
    )
  }
}
