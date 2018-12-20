import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom'
import './Home.scss';

export default class Home extends Component {
  render() {
    return (

      <div className="WallHome">
          
        <Container>

          <Row>
            <div>
              <p className="Welcome">Bienvenue</p>
            </div>
          </Row>

          <Row>
            <div>
              <img src="http://image.noelshack.com/fichiers/2018/51/3/1545228420-zideup-logo-blanc.png" alt="Logo ZideUp" className="Logo-home"/>
            </div>
          </Row>

          <Row>
            <div>
              <p className="Idées-accr">Laissez vos idées s'élever</p>
            </div>
          </Row>

          <Row>
            <Link to="/2">
              <button className="Demarrer">
              Démarrer
              </button>
            </Link>
          </Row>
          
        </Container>     
          
      </div>
    )
  }
}
