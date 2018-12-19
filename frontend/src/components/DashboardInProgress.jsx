import React, { Component } from 'react'
import { Container, Row, Col, Progress } from 'reactstrap';
import './DashboardInProgress.scss'

export default class DashboardInProgress extends Component {
  render() {
    return (
      <Container className="InProgressContainer"> 
        <p>En cours</p>
        <hr/>
        <Row className="Defis">
          <Col xs={8} className="Title"><p>
          Production : Digitaliser l'audit qualité</p>
          <Progress value="55" className="progress" />
          </Col>
          <Col xs={4} ><i class="fas fa-thumbs-up"></i>15<i class="fas fa-lightbulb"></i>8<i class="fas fa-arrow-right fleche"></i></Col>
        </Row>
        <hr/>
        <Row className="Defis">
          <Col xs={8} className="Title"><p>
          Qualité : Diminuer les défauts de 20% sur...</p>
          <Progress value="15" className="progress" />
          </Col>
          <Col xs={4} ><i class="fas fa-thumbs-up"></i>44<i class="fas fa-lightbulb"></i>12<i class="fas fa-arrow-right fleche"></i></Col>
        </Row>
        <hr/>
        <Row className="Defis">
          <Col xs={8} className="Title"><p>
          R&D : Proposer 4 nouvelles fonctionnalités</p>
          <Progress value="80" className="progress" />
          </Col>
          <Col xs={4} ><i class="fas fa-thumbs-up"></i>23<i class="fas fa-lightbulb"></i>15<i class="fas fa-arrow-right fleche"></i></Col>
        </Row>
        <hr/>
      </Container>
    )
  }
}
