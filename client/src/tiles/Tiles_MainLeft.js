import React, { Component } from 'react';


// material-ui
import ListedCorpusItem from "../elements/ListedCorpusItem";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// icons
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";


const styles = ({
    root: {
        height: '100%',
        marginLeft: '0',
        marginRight: '0'
    },
    alignItemsAndJustifyContent: {
        height: '7vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'grey',
        marginBottom: 'thin solid grey'
    },
    corpusItem: {
        borderBottom: 'thin solid grey',
        paddingLeft: '8%'
    }
});


class Tiles_MainLeft extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayed: this.props.displayed
        };

        this.renderCorpus = this.renderCorpus.bind(this);
        this.hoverFunction = this.hoverFunction.bind(this);

    }

    componentDidMount() {
    }

    renderCorpus(){
        console.log('fired', this.props);
        this.props.renderCorpus('corpusView')
    }

    hoverFunction(){
    }

    render() {

        const { classes } = this.props;
        let displayed = this.props.displayed;
        let author = 'authorPlaceholder';
        let title = 'titlePlaceholder';

        let list = [1,2,3,4,5,6,7]

        // there should be a list of all the selected texts. This info should be passed to this component. Then I can iterate over that list to create
        if (displayed === 'home' || displayed === 'corpusView'){
            return (
                <Grid>
                    <Grid container className={classes.alignItemsAndJustifyContent}>
                        <Grid item>
                            <h1>Corpus</h1>
                        </Grid>
                        <Grid item>
                            <IconButton aria-label="share" onClick={this.renderCorpus}>
                                <EditIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid container>
                        {list.map((element) =>
                            <Grid item xs={12} className={classes.corpusItem}>
                                <ListedCorpusItem data={element}/>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            );
        }
    }
}

export default withStyles(styles)(Tiles_MainLeft);
