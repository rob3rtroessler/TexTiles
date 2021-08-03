import React, { Component } from 'react';
import * as d3 from "d3";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';


class AllDashboardsBackBtn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayed: this.props.displayed
        };

        this.renderHome = this.renderHome.bind(this);

    }

    componentDidMount() {
    }

    renderHome(){
        console.log('fired', this.props);
        this.props.backToHome('home')
    }


    render() {

        console.log('rendering back button');

        return (
            <Row onClick={this.renderHome} style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center all-backBtn">
                <div className="align-self-center">
                    <h3 style={{cursor: 'pointer'}}>back to home</h3>
                </div>
            </Row>
        );
    }
}

export default AllDashboardsBackBtn;
