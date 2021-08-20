import React from "react";
import {fetchKeyWord} from "../../redux/actions";
import {connect} from "react-redux";

import ConcordanceVis from "../charts/ConcordanceVis"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"


class TopWords extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // logs
        console.log('props in topwords', this.props)
        const {hits} = this.props.data
        const {topWords} = this.props.data
        return (
            <Container fluid style={{height: "100%"}}>
                <Row style={{height: "20%"}}>
                    <Col><h4>Top Words</h4></Col>
                    <Col><h4>Color Table</h4></Col>
                </Row>
                <Row id={'top_words_container'} style={{height: "80%"}}>
                    <Col>
                        {topWords.map((data, index) => {
                            return (<Row key={index} className={'topWordsRow'}>
                                {data.word} ({data.value})
                            </Row>)
                        })}
                    </Col>
                    <Col>
                        <h4>color Table</h4>
                    </Col>

                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // now make the state to their props
    return state.fetch
}

const mapDispatchToProps = (dispatch) => ({
    fetchedData: (word) => dispatch(fetchKeyWord(word)),
})

export default connect(mapStateToProps, mapDispatchToProps())(TopWords);
