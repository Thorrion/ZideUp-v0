import React, { Component } from 'react'
import { Container, Row, Col, Progress } from 'reactstrap'
import './All.scss'

export default class All extends Component {
  render() {
    return (
      <div>
         <Container className="AllContainer"> 

        <div className="NouveauxAll">
        <p>Nouveaux</p>
        <hr/>
        <Row className="Defis">
          <Col xs={8} className="Title"><p>
          Production : Digitaliser l'audit qualité</p>
          <Progress value="55" className="progress" />
          </Col>
          <Col xs={4} ><i class="fas fa-arrow-right fleche"></i></Col>
        </Row>
        <hr/>
        <Row className="Defis">
          <Col xs={8} className="Title"><p>
          Qualité : Diminuer les défauts de 20% sur...</p>
          <Progress value="15" className="progress" />
          </Col>
          <Col xs={4} ><i class="fas fa-arrow-right fleche"></i></Col>
        </Row>
        <hr/>
        <Row className="Defis">
          <Col xs={8} className="Title"><p>
          R&D : Proposer 4 nouvelles fonctionnalités</p>
          <Progress value="80" className="progress" />
          </Col>
          <Col xs={4} ><i class="fas fa-arrow-right fleche"></i></Col>
        </Row>
       
        </div>


        <div className="EnCoursAll">
        <p className="TextCate">En cours</p>
        
            <Row className="Defis">
              <Col xs={8} className="Title"><p className="textdef">
                Production : Digitaliser l'audit qualité</p>
                <Progress value="55" className="progress" />
              </Col>
              <Col xs={3} >
                <div className="emoji">
                  <i class="fas fa-thumbs-up">
                  </i> <p className="numb">15</p>
          <i 
          class="fas fa-lightbulb">
          </i><p className="numb">8</p>
          </div>
              </Col>
              <Col xs={1} >
              <div className="flechage">
                <i 
                class="fas fa-arrow-right fleche">
                </i>
                </div>
              </Col>
            </Row>
        <hr/>

                    <Row className="Defis">
              <Col xs={8} className="Title"><p className="textdef">
              Qualité : Diminuer les défauts de 20% sur...</p>
                <Progress value="15" className="progress" />
              </Col>
              <Col xs={3} >
                <div className="emoji">
                  <i class="fas fa-thumbs-up">
                  </i> <p className="numb">15</p>
          <i 
          class="fas fa-lightbulb">
          </i><p className="numb">8</p>
          </div>
              </Col>
              <Col xs={1} >
              <div className="flechage">
                <i 
                class="fas fa-arrow-right fleche">
                </i>
                </div>
              </Col>
            </Row>
        <hr/>


        <Row className="Defis">
          <Col xs={8} className="Title"><p>
          Qualité : Diminuer les défauts de 20% sur...</p>
          <Progress value="15" className="progress" />
          </Col>
          <Col xs={4} ><i class="fas fa-thumbs-up"></i>44
          <i class="fas fa-lightbulb"></i>12<i class="fas fa-arrow-right fleche">
          </i>
          </Col>
        </Row>
        <hr/>
        <Row className="Defis">
          <Col xs={8} className="Title"><p>
          R&D : Proposer 4 nouvelles fonctionnalités</p>
          <Progress value="80" className="progress" />
          </Col>
          <Col xs={4} >
          <i class="fas fa-thumbs-up"></i>23
          <i class="fas fa-lightbulb"></i>15
          <i class="fas fa-arrow-right fleche">
          </i>
          </Col>
        </Row>
        <hr/>
        </div>


      </Container>
        
      </div>
    )
  }
}



