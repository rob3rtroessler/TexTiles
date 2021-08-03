import React, { Component } from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'

// import other components
import ConcordanceVisContainer from "../visualizations/ConcordanceVisContainer.js"
import CorpusView from "./CorpusView";
import BarChart from '../visualizations/BarChart'


class Tiles_MainCenter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayed: this.props.displayed,
            selectedTexts: {}
        };

        // bind callbacks
        this.corpusHasUpdatedCallback = this.corpusHasUpdatedCallback.bind(this);

    }

    componentDidMount() {

    }

    render() {
        console.log('rendering concordanceView, check if data is available', this.props.data)
        if(this.props.data === undefined){
            return(
                <div>no data</div>
            )
        }

        // HOME
        else {
            console.log('in else')
            return (
                <Row id='ConcordanceVisContainer' style={{height: '100%', width: '100%', marginLeft: '0', marginRight: '0'}}>
                    {this.props.displayed === 'home' &&
                        <ConcordanceVisContainer data={this.props.data}/>
                    }
                </Row>
            );
        }

    }

    updateTextSelection(){
        let selection = this.state.selectedTexts
        console.log('updating selection', selection);
        this.props.selectedTextsCallback(selection)
    }

    corpusHasUpdatedCallback(dict){
        console.log('callback has sent data to Tiles_MainCenter, call updateTextSelection', dict)
        this.updateTextSelection(dict)
    }
    textHasUpdatedCallback(textID, status){
        console.log(textID, status)
        // update selectedTexts
        //this.setState({selectedTexts: callback})
    }
}

export default Tiles_MainCenter;
