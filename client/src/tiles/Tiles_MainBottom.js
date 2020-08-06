import React, { Component } from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';

// import other components
import HealthGraph from "../visualizations/HealthGraph";

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

        // JOURNAL
        else if ( displayed === 'corpusView'){
            return(<p></p>)
        }
    }
}

export default Tiles_MainBottom;
