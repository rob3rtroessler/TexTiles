import React from "react";

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

class RobContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //console.log(this.props)
        const {height, width}= this.props
        return (
            // div container needs to have 100% height and width, otherwise withMeasure will not work properly
            <Container fluid style={{height: "100%"}}>
                <Row>
                    <Col md={12}><h1>Example</h1></Col>
                    <Col ><h4>width: {width.toFixed(2)}</h4></Col>
                    <Col ><h4>height: {height.toFixed(2)}</h4></Col>
                </Row>
            </Container>
        )
    }
}

export default RobContainer;
