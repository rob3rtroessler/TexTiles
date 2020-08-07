import React, { Component } from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CorpusItem from "../elements/CorpusItem";


class CorpusView extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        let list = [1,2,3,4,5,6,7]

        return(
            <Row>
            {list.map((element) =>
                <Col xs={4}>
                    <CorpusItem/>
                </Col>
                )}
            </Row>
        )
    }
}

export default CorpusView;
