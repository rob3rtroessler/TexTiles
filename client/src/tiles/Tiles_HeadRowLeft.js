import React, { Component } from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';


class Tiles_HeadRowLeft extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayed: true
        };

    }

    componentDidMount() {
    }

    render() {
        return (
            <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center">
                <div className="align-self-center">
                    <h1>TexTiles</h1>
                </div>
            </Row>
        );
    }
}

export default Tiles_HeadRowLeft;