import React, { Component } from 'react'
import { Container, Row, Col, Progress } from 'reactstrap'
import './All.scss'

export default class All extends Component {
  render() {
    return (
      <div>
        <Container className="AllContainer">

          <div className="NouveauxAll">

            <p className="TextCate">Nouveaux</p>

            <Row className="Defis">
              <Col xs={8} className="Title"><p className="textdef">
                Production : Digitaliser l'audit qualité</p>
                <Progress value="55" className="progress" />
              </Col>
              <Col xs={4} >
                <div className="flechage">
                  <i
                    className="fas fa-arrow-right fleche">
                  </i>
                </div>
              </Col>
            </Row>
            <hr />

            <Row className="Defis">
              <Col xs={8} className="Title"><p className="textdef">
              Qualité : Diminuer les défauts de 20...</p>
                <Progress value="15" className="progress" />
              </Col>
              <Col xs={1} >
                <div className="flechage">
                  <i
                    className="fas fa-arrow-right fleche">
                  </i>
                </div>
              </Col>
            </Row>
            <hr />

            <Row className="Defis">
              <Col xs={8} className="Title"><p className="textdef">
              R&D : Proposer 4 nouvelles fonctio...</p>
                <Progress value="80" className="progress" />
              </Col>

              <Col xs={1} >
                <div className="flechage">
                  <i
                    className="fas fa-arrow-right fleche">
                  </i>
                </div>
              </Col>
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
                  <i className="fas fa-thumbs-up">
                  </i> <p className="numb">15</p>
                  <i
                    className="fas fa-lightbulb">
                  </i><p className="numb">8</p>
                </div>
              </Col>
              <Col xs={1} >
                <div className="flechage">
                  <i
                    className="fas fa-arrow-right fleche">
                  </i>
                </div>
              </Col>
            </Row>
            <hr />

            <Row className="Defis">
              <Col xs={8} className="Title"><p className="textdef">
                Qualité : Diminuer les défauts de 20...</p>
                <Progress value="15" className="progress" />
              </Col>
              <Col xs={3} >
                <div className="emoji">
                  <i className="fas fa-thumbs-up">
                  </i> <p className="numb">22</p>
                  <i
                    className="fas fa-lightbulb">
                  </i><p className="numb">6</p>
                </div>
              </Col>
              <Col xs={1} >
                <div className="flechage">
                  <i
                    className="fas fa-arrow-right fleche">
                  </i>
                </div>
              </Col>
            </Row>
            <hr />

            <Row className="Defis">
              <Col xs={8} className="Title"><p className="textdef">
                R&D : Proposer 4 nouvelles fonctio...</p>
                <Progress value="80" className="progress" />
              </Col>
              <Col xs={3} >
                <div className="emoji">
                  <i className="fas fa-thumbs-up">
                  </i> <p className="numb">23</p>
                  <i
                    className="fas fa-lightbulb">
                  </i><p className="numb">9</p>
                </div>
              </Col>
              <Col xs={1} >
                <div className="flechage">
                  <i
                    className="fas fa-arrow-right fleche">
                  </i>
                </div>
              </Col>
            </Row>
            <hr />



          </div>

          <div className="TermineAll">
            <p className="TextCate">Terminés</p>

            <Row className="Defis">
              <Col xs={8} className="Title"><p className="textdef">
                Production : Digitaliser l'audit qualité</p>
                <Progress value="100" className="progress" />
              </Col>
              <Col xs={3} >
                <div className="emoji">
                  <i className="fas fa-thumbs-up">
                  </i> <p className="numb">15</p>
                  <i
                    className="fas fa-lightbulb">
                  </i><p className="numb">8</p>
                </div>
              </Col>
              <Col xs={1} >
                <div className="flechage">
                  <i
                    className="fas fa-arrow-right fleche">
                  </i>
                </div>
              </Col>
            </Row>
            <hr />

            <Row className="Defis">
              <Col xs={8} className="Title"><p className="textdef">
              Qualité : Diminuer les défauts de 20...</p>
                <Progress value="100" className="progress" />
              </Col>
              <Col xs={3} >
                <div className="emoji">
                  <i className="fas fa-thumbs-up">
                  </i> <p className="numb">22</p>
                  <i
                    className="fas fa-lightbulb">
                  </i><p className="numb">6</p>
                </div>
              </Col>
              <Col xs={1} >
                <div className="flechage">
                  <i
                    className="fas fa-arrow-right fleche">
                  </i>
                </div>
              </Col>
            </Row>
            <hr />

            <Row className="Defis">
              <Col xs={8} className="Title"><p className="textdef">
              R&D : Proposer 4 nouvelles fonctio...</p>
                <Progress value="100" className="progress" />
              </Col>
              <Col xs={3} >
                <div className="emoji">
                  <i className="fas fa-thumbs-up">
                  </i> <p className="numb">23</p>
                  <i
                    className="fas fa-lightbulb">
                  </i><p className="numb">9</p>
                </div>
              </Col>
              <Col xs={1} >
                <div className="flechage">
                  <i
                    className="fas fa-arrow-right fleche">
                  </i>
                </div>
              </Col>
            </Row>
            <hr />



          </div>


        </Container>

      </div>
    )
  }
}



