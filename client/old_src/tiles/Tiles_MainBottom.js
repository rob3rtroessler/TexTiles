import React, { Component } from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

// import other components
import HealthGraph from "../visualizations/HealthGraph";
import CorpusView from "./CorpusView"
import AddCorpusItem from "./AddCorpusItem";

class Tiles_MainBottom extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        let displayed = this.props.displayed;

        // HOME
        if (displayed === 'home') {
            return (
                <HealthGraph/>
            );
        }
        else if (displayed === 'corpusView') {
            return (
                <AddCorpusItem/>
            );
        }

    }
}

export default Tiles_MainBottom;
