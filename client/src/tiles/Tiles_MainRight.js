import React, { Component } from 'react';
import * as d3 from "d3";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';

// modules
import WordList from "../visualizations/WordList";



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
        this.computeWords(this.props.concordances)
    }

    // life cycle - did update
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('right side - props?', prevProps.concordances.length, this.props.concordances.length);

        if (prevProps.concordances.length !== this.props.concordances.length){
            console.log('props changed, computing new topWords');
            this.computeWords(this.props.concordances, prevState.topWords);
        } else {
            console.log('props didnt changed, no need to compute topWords')
        }
        //
    }

    // helper
    computeWords(concordanceArrays){

        let tmp = {};
        concordanceArrays.forEach(array => {
            array.forEach(word => {
                if (!tmp[word]){
                    tmp[word] = 1;
                }
                else {
                    tmp[word] += 1;
                }
            })
        });

        // create array and sort
        let items = Object.keys(tmp).map(function(key) {
            return [key, tmp[key]];
        });

        // Sort the array based on the second element
        items.sort(function(first, second) {
            return second[1] - first[1];
        });

        // Create a new array with only the first 5 items
        let tmpTwo = items.slice(0, 50);
        let finalTopWords = [];
        tmpTwo.forEach(element => {
            let key = element[0];
            let value = element[1];
            finalTopWords.push({word: key, value:value})
        });

        // asd
        console.log('finished computing topWords', finalTopWords);
        this.setState({topWords: finalTopWords})
    }

    selectWord(){
        console.log('fired', this.props);
        this.props.selectWordParentCallback(this.state.selectedWords)
    }

    // when clicking on a word, add to array, change state and send info to parent


    render() {

        console.log('rendering wordList-Tile');
        return (
            /* home - journal */
            <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center">
                <WordList topWords={this.state.topWords}/>
            </Row>
        );
    }
}

export default Tiles_MainRight;
