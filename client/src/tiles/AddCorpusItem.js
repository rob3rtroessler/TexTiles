import React, { Component } from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

// material-ui
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";

// styles
const styles = ({
    AlignAndJustify: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    myButton: {
        width: '100%',
        height: '4vh',
        marginTop: 20,
        background: 'darkgrey'
    },
    authorTextBox: {
        width: '100%',
        background: 'lightgrey',
        borderRadius: 4,
        '& label.Mui-focused': {
            color: 'grey',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'darkgrey',
            },
            '&:hover fieldset': {
                borderColor: 'grey',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'grey',
            },
        },
    },
});

//
class AddCorpusItem extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    getItem(){
        console.log(document.querySelector('#authorInput').value);
        let author = document.querySelector('#authorInput').value;
        let title = document.querySelector('#titleInput').value;
        this.addItemToCorpusList(author, title);
    }

    addItemToCorpusList(author, title){
        // callback
    };

    render() {
        const { classes } = this.props;
        console.log(classes);
        return (
            <Container fluid style={{height:'100%', width:'100%', background: 'lightgrey'}}>
                <Row className={classes.AlignAndJustify} style={{height: '30%'}}>
                    <h2>Add Item to Corpus</h2>
                </Row>
                <Row>
                    <Col xs={{span: 5, offset: 1}}>
                        <form>
                            <TextField className={classes.authorTextBox}
                                   label="author"
                                   variant="outlined"
                                   id="authorInput"
                            />
                        </form>
                    </Col>
                    <Col xs={{span: 5}}>
                        <form>
                            <TextField className={classes.authorTextBox}
                                       label="title"
                                       variant="outlined"
                                       id="titleInput"
                            />
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{span:4, offset:4}} className={classes.AlignAndJustify}>
                        <Button className={classes.myButton} onClick={this.getItem}>Add Text</Button>
                    </Col>

                </Row>
            </Container>
        );
    }
}

export default withStyles(styles)(AddCorpusItem);