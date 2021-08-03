import React, { Component } from 'react';
import {ThemeContext} from '../context/ColorManager'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


class TopWordsListItem extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
    }

    // when user hovers over word, a color is assigned and all tiles light up in that color
    WordHovered(){
        //console.log('word hovered', this, );

        // now color the word
        document.getElementById(this.props.word).style.background = 'blue';
    }

    // when user clicks on a word, a color is assigned and all tiles will be assigned that color, too
    WordClicked(){
        console.log('word clicked', this);
        console.log('colorTable', );

        // now color the word
        document.getElementById(this.props.word).style.background = 'blue';

    }

    lookUpColor(word){

        // this will be a state - inside a hook?!
        let colors = ['#fb8072', '#8dd3c7','#ffffb3','#bebada','#80b1d3','#fdb462','#b3de69','#fccde5','#bc80bd','#ccebc5','#ffed6f'];
        let lockedWords = ['', '','','','','','','','','','']; //11

    }

    render() {
        let word = this.props.word
        let value = this.props.value
        return (
            <Row id={word} onMouseOver={() => this.WordHovered()} onClick={() => this.WordClicked()}>
                <Col>{word}</Col>
                <Col>{value}</Col>

            </Row>
        );
    }
}

export default TopWordsListItem;