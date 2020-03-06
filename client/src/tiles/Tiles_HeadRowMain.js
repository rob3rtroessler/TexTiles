import React, { Component } from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {Form} from 'react-bootstrap'

class Tiles_HeadRowMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            keyword: null
        };

        // bind click event to search for Keyword
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        console.log('searching for keyword', this.state.keyword);
        this.props.searchKeywordParentCallback(this.state.keyword);
    };

    handleInputChange = (event) =>{
        event.preventDefault();
        console.log(event.target.value);
        this.setState({keyword: event.target.value})
    };


    render() {
        const {keyword} = this.state;
        if (this.props.displayed === 'home' || true) {
            return (
                <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center">
                    <div className="align-self-center">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder='enter keyword' name={keyword} onChange={this.handleInputChange}/>
                            <button>Generate</button>
                        </form>
                    </div>
                </Row>
            )
        }
    }
}

export default Tiles_HeadRowMain;
