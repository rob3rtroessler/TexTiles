import React, { Component } from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';

import { WiDaySunny } from 'weather-icons-react';
import AllDashboardsBackBtn from "../visualizations/AllDashboardsBackBtn";


class Tiles_HeadRowRight extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayed: true
        };
        this.passOnInfo = this.passOnInfo.bind(this);
    }

    componentDidMount() {
    }

    passOnInfo(state){
        // log
        console.log('passing on info', state, this.props);
        this.props.renderHome('home')
}

    render() {
        let mySwitch = this.props.displayed;

        if(mySwitch === 'home'){
            return (
                <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center">
                    <div className="align-self-center">
                        Today: <WiDaySunny  size={24} color='#000' />, 20 *Celsius
                    </div>
                </Row>
            );
        } else {
            return(
                <AllDashboardsBackBtn backToHome={this.passOnInfo} displayed={this.state.displayed}/>
            )
        }

        /*
        return(
            <div>
                {/!*JOURNAL DASHBOARD*!/}


                <div key="journal-left" style={{background:'darkgrey', borderRadius: '5px', border: 'thin solid grey'}}>
                    <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center">
                        <div className="align-self-center">
                            {/!*<h1>left</h1>*!/}
                        </div>
                    </Row>
                </div>
                <div key="journal-center" style={{background:'darkgrey', borderRadius: '5px', border: 'thin solid grey'}}>
                    <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center">
                        <div className="align-self-center">

                        </div>
                    </Row>
                </div>
                <div key="journal-right" style={{background:'darkgrey', borderRadius: '5px', border: 'thin solid grey'}}>
                    <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center">
                        <div className="align-self-center">
                            {/!*<h1>right</h1>*!/}
                        </div>
                    </Row>
                </div>
            </div>
        )*/
    }
}

export default Tiles_HeadRowRight;



