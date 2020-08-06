import React, { Component } from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import HealthGraph from "../visualizations/HealthGraph";

// import other components
import ConcordanceVis from "../visualizations/ConcordanceVis.js"

class Tiles_MainCenter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayed: this.props.displayed
        };

    }



    componentDidMount() {

    }

    render() {
        console.log('rendering concordanceView, check if data is available', this.props.concordances)
        return (
            <Row id='ConcordanceVisContainer' style={{height: '100%', marginLeft: '0', marginRight: '0'}}>
                    {this.props.displayed === 'home' &&
                        <ConcordanceVis data={this.props.data}/>
                    }
            </Row>
        );
    }
}

export default Tiles_MainCenter;
