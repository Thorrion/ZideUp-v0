import React, { Component } from 'react'
import './InputAndSearch.scss';
import { Container, Row, Col } from 'reactstrap';
import { TabMenu } from 'primereact/tabmenu';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';




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
                                <tr id="Menudef">

                                    <td className="Tous">Tous</td>
                                    <td className="Defis">Mes défis</td>

                                </tr>

                            </table>

                        </Col>
                    </Row>

                    <Row className="BackSearch">
                        <Col xs={12} className="SearchDash">
                            <form>
                                <label>
                                    <input type="search" className="searchB" />
                                    <img src="http://image.noelshack.com/fichiers/2018/51/3/1545250383-search.png" className="Loupe" />

                                </label>

                            </form>



                        </Col>
                    </Row>
                    
                    <Row>
                        <Col xs={12} className="Pluuus">
                           
                                    
                                    <img src="http://image.noelshack.com/fichiers/2018/51/3/1545257524-plus-1.png" className="Plus" />

                               

                            



                        </Col>
                    </Row>





                </Container>

            </div>
        )
    }
}
