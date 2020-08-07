import React, { Component } from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from  'react-bootstrap/Col'

// semantic ui
import {Checkbox} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

// d3
import * as d3 from "d3";


class Tiles_MainLeft extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayed: this.props.displayed
        };

        this.renderCorpus = this.renderCorpus.bind(this);
        this.hoverFunction = this.hoverFunction.bind(this);

    }

    componentDidMount() {
    }

    renderCorpus(){
        console.log('fired', this.props);
        this.props.renderCorpus('corpusView')
    }

    hoverFunction(){
        console.log('halle')
        d3.selectAll('.book').attr('fill', 'blue')
    }

    render() {
        let displayed = this.props.displayed;
        let author = 'authorPlaceholder';
        let title = 'titlePlaceholder';

        // there should be a list of all the selected texts. This info should be passed to this component. Then I can iterate over that list to create
        if (displayed === 'home' || displayed === 'corpusView'){
            return (
            <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}}>
                    <Container>
                        <h1>Selected Texts</h1>
                        <button onClick={this.renderCorpus}>edit</button>
                        <Row style={{'borderTop':'thin solid grey', 'height': '10%'}}>
                            <Col xs={3}>
                                <Row className="justify-content-center" style={{'height':'100%'}}>
                                    <Checkbox toggle className="align-self-center"/>
                                </Row>
                            </Col>
                            <Col xs={9}>
                                <Row className="justify-content-center" style={{'height':'100%'}}>
                                    <p toggle className="align-self-center" onMouseEnter={() => this.hoverFunction()} >{author}: {title}</p>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{'borderTop':'thin solid grey', 'height': '10%'}}>
                            <Col xs={3}>
                                <Row className="justify-content-center" style={{'height':'100%'}}>
                                    <Checkbox toggle className="align-self-center"/>
                                </Row>
                            </Col>
                            <Col xs={9}>
                                <Row className="justify-content-center" style={{'height':'100%'}}>
                                    <p toggle className="align-self-center">{author}: {title}</p>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{'borderTop':'thin solid grey', 'height': '10%'}}>
                            <Col xs={3}>
                                <Row className="justify-content-center" style={{'height':'100%'}}>
                                    <Checkbox toggle className="align-self-center"/>
                                </Row>
                            </Col>
                            <Col xs={9}>
                                <Row className="justify-content-center" style={{'height':'100%'}}>
                                    <p toggle className="align-self-center">{author}: {title}</p>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{'borderTop':'thin solid grey', 'height': '10%'}}>
                            <Col xs={3}>
                                <Row className="justify-content-center" style={{'height':'100%'}}>
                                    <Checkbox toggle className="align-self-center"/>
                                </Row>
                            </Col>
                            <Col xs={9}>
                                <Row className="justify-content-center" style={{'height':'100%'}}>
                                    <p toggle className="align-self-center">{author}: {title}</p>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{'borderTop':'thin solid grey', 'height': '10%'}}>
                            <Col xs={3}>
                                <Row className="justify-content-center" style={{'height':'100%'}}>
                                    <Checkbox toggle className="align-self-center"/>
                                </Row>
                            </Col>
                            <Col xs={9}>
                                <Row className="justify-content-center" style={{'height':'100%'}}>
                                    <p toggle className="align-self-center">{author}: {title}</p>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{'borderTop':'thin solid grey', 'height': '10%'}}>
                            <Col xs={3}>
                                <Row className="justify-content-center" style={{'height':'100%'}}>
                                    <Checkbox toggle className="align-self-center"/>
                                </Row>
                            </Col>
                            <Col xs={9}>
                                <Row className="justify-content-center" style={{'height':'100%'}}>
                                    <p toggle className="align-self-center">{author}: {title}</p>
                                </Row>
                            </Col>
                        </Row>

                        {/*there should be a an add button to */}


                    </Container>


                </Row>
            );
        } else {
            return (
                <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center">
                    <div className="align-self-center">
                        <h1>Sth else</h1>
                    </div>
                </Row>
            )
        }
    }
}

export default Tiles_MainLeft;
