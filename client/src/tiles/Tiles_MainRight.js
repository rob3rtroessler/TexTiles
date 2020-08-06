import React, { Component } from 'react';
import * as d3 from "d3";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
// modules
import WordList from "../visualizations/WordList";
import TopWordsListItem from "../elements/TopWordsListItem"



class Tiles_MainRight extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedWords: [],
            concordances: [],
            topWords: []
        };

        // bind click event to render the journal dashboard
        this.selectWord = this.selectWord.bind(this);
    }

    // life cycle - did mount
    componentDidMount() {
        //this.computeWords(this.props.data)
    }

    // life cycle - did update
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('right side did update')
    }

    // color?
    selectWord(){
        console.log('fired', this.props);
        this.props.selectWordParentCallback(this.state.selectedWords)
    }

    // rendering
    render() {
        console.log('rendering wordList-Tiles, checking props', this.props.data.topWords);

        if (this.props.displayed === 'home') {
            return (
                <Row style={{height: '100%', marginLeft: '0', marginRight: '0', overflowY: 'scroll'}} className="justify-content-center">

                    {/*if Word environments have not been generated & topWords have not been computed, hint user*/}
                    {this.props.data.length === 0 &&
                    <div className="align-self-center">
                        <h4 style={{textAlign: "center"}}>select texts and generate concordances before exploring</h4>
                    </div>
                    }

                    {/*if Word environments & topWords have been computed, generate topWord list*/}
                    {this.props.data.topWords &&
                        <Col>
                            {this.props.data.topWords.map((topWordsDict) =>
                                <TopWordsListItem word={topWordsDict.word} value={topWordsDict.value}/>
                            )}
                        </Col>
                    }
                </Row>
            )
        }
        else if (this.props.displayed !== 'home') {
            return (
                <div>s</div>
            )
        }
    }
}

export default Tiles_MainRight;
