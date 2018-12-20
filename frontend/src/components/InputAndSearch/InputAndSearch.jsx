import React, { Component } from 'react'
import './InputAndSearch.scss';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom'


export default class InputAndSearch extends Component {

  constructor() {
    super();
    this.state = {
      items: [
        { label: 'Tous' },
        { label: 'Mes défis' },

      ]
    };
  }

  render() {
    return (
      <div>
        <Container className="contentsSearch" >

          <Row className="BackMen">
            <Col xs={12} className="Menudef">
              <table>
                <tbody>

                <tr id="Menudef">

                  <td className="Tous">Tous</td>
                  <td className="Defis">Mes défis</td>

                </tr>
                </tbody>

              </table>

            </Col>
          </Row>

          <Row className="BackSearch">
            <Col xs={12} className="SearchDash">
              <form>
                <label>
                  <input type="search" className="searchB" />
                  <img src="http://image.noelshack.com/fichiers/2018/51/4/1545322533-search-1.png" alt="Loupe" className="Loupe" />

                </label>

              </form>

            </Col>
          </Row>
          
          <Row>
            <Col xs={12} className="Pluuus">

              <NavLink to="/4">
                <img src="http://image.noelshack.com/fichiers/2018/51/3/1545257524-plus-1.png" alt="Bouton +" className="Plus" />
              </NavLink>

            </Col>
          </Row>





        </Container>

      </div>
    )
  }
}
