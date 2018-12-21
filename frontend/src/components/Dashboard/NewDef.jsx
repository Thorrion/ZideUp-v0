import React, { Component } from 'react'
import { Container, Row, Col, Progress } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import './NewDef.scss'

export default class NewDef extends Component {
  render() {
    return (
      <div>
        <Container className="NewDefContainer">

          <div className="NouveauxNewDef">

            <p className="TextCate">Nouveaux</p>

            
            <Row className="Defis">
              <Col xs={8} className="Title"><p className="textdef">
                Efficacité: augmenter la rapidité du ...</p>
               
              </Col>
              <Col xs={4} >
              <NavLink to="/6">
                <div className="flechage">
                  <i className="fas fa-arrow-right fleche">
                  </i>
                </div>
              </NavLink>
              </Col>
            </Row>
            <hr />
            

            <Row className="Defis">
              <Col xs={8} className="Title"><p className="textdef">
                Production : Digitaliser l'audit qualité</p>
               
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


          <div className="EnCoursNewDef">
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

          <div className="TermineNewDef">
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



