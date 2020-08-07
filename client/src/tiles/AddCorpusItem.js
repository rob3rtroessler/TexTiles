import React, { Component } from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

// import other components
import HealthGraph from "../visualizations/HealthGraph";
import CorpusView from "./CorpusView"

class AddCorpusItem extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <Row>
                <Col>
                    <h4>Add Item</h4>
                </Col>
            </Row>
        );
    }
}

export default AddCorpusItem;