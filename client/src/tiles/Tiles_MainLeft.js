import React, { Component } from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';

// semantic ui
import {Checkbox} from "semantic-ui-react";



class Tiles_MainLeft extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayed: this.props.displayed
        };

        this.renderCorpus = this.renderCorpus.bind(this);

    }

    componentDidMount() {
    }

    renderCorpus(){
        console.log('fired', this.props);
        this.props.renderCorpus('corpusView')
    }

    render() {
        let displayed = this.props.displayed;
        if (displayed === 'home'){
            return (
                <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center">
                    <div className="align-self-center">
                        <h1>List of Words</h1>
                        <Checkbox toggle/>
                        <button onClick={this.renderCorpus}>test</button>
                    </div>
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
