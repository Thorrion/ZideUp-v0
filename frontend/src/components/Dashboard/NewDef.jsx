import React, { Component } from 'react'
import { Container, Row, Col, Progress } from 'reactstrap'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './NewDef.scss'

class NewDef extends Component {
  state = {
    selected : {}
  }

  // selected = (challenge) => {
  //   this.setState({selected : challenge})
  // }
  
  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <div>
        <Container className="NewDefContainer">

          <div className="NouveauxNewDef">

            <p className="TextCate">Nouveaux</p>

            {this.props.challenges.list &&
            this.props.challenges.list.map((challenge, index) => {
              return (

              <div key={index}>

              <Row className="Defis">
                <Col xs={8} className="Title"><p className="textdef">
                  {challenge.perimetre}: {challenge.nom}</p>
                </Col>
                <Col xs={4} >
                <NavLink 
                to={`/6/${index}`}
                >
                  <div className="flechage">
                    <i className="fas fa-arrow-right fleche"
                    >
                    </i>
                  </div>
                </NavLink>
                </Col>
              </Row>
              <hr/>
              </div>
              )
            })
            }

            <Row className="Defis">
              <Col xs={8} className="Title"><p className="textdef">
                Qualité : Diminuer les défauts de 20% sur...</p>

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
            <hr />


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

const mapStateToProps = (state) => ({
  ...state
})

export default connect(mapStateToProps)(NewDef)
