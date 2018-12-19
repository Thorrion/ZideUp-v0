import React, { Component } from 'react';
import './Home.scss';
import { Container, Row, Col } from 'reactstrap';
import {Button} from "primereact/button";

export default class Home extends Component {
  render() {
    return (

      <div className="WallHome">
        
          
        <Container className="contentsHome" >


                        <Row>
                        <div className="Bienvenue">
                        <p className="Welcome">Bienvenue</p>
                        </div>
                        </Row>

                        <Row>
                        <div className="Logo-Accueil">
                        <img src="http://image.noelshack.com/fichiers/2018/51/3/1545228420-zideup-logo-blanc.png" className="Logo-home"/>
                        </div>
                        </Row>

                        <Row>
                        <div className="Idées-el">
                        <p className="Idées-accr">Laissez vos idées s'élever</p>
                         </div>
                         </Row>


                        <Row>
                        <button class="Demarrer"
                        type="button">
                        Démarrer
                        </button>
                        </Row>

                        {/* <div className="lineHome">
                        </div> */}
       

                         


          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
     </Container>     
          
      </div>
    )
  }
}
