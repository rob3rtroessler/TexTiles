import React from "react";
import {fetchKeyWord} from "../../redux/actions";
import {connect} from "react-redux";

import ConcordanceVis from "../charts/ConcordanceVis"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"


class Concordance extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // logs
        // console.log('props in concordance', this.props)

        const {height, width}= this.props
        const {hits} = this.props.data
        return (
            <Container fluid style={{height: "100%"}}>
                <Row style={{height:'20%'}}>
                    <Col md={12}><h1>Concordance</h1></Col>
                    <Col ><h4>width: {width.toFixed(2)}</h4></Col>
                    <Col ><h4>height: {height.toFixed(2)}</h4></Col>
                    <Col ><h4>hits: {hits} </h4></Col>
                </Row>
                <Row style={{height:'80%'}}>
                    <ConcordanceVis {...this.props}/>
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

export default connect(mapStateToProps, mapDispatchToProps())(Concordance);

