import React, { Component } from 'react';

// react grid
import GridLayout from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import 'semantic-ui-css/semantic.min.css'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// import tiles
import Tiles_HeadRowLeft from "./tiles/Tiles_HeadRowLeft";
import Tiles_HeadRowMain from "./tiles/Tiles_HeadRowMain";
import Tiles_HeadRowRight from "./tiles/Tiles_HeadRowRight";

import Tiles_MainLeft from "./tiles/Tiles_MainLeft";
import Tiles_MainCenter from "./tiles/Tiles_MainCenter";
import Tiles_MainRight from "./tiles/Tiles_MainRight";

import Tiles_MainBottom from "./tiles/Tiles_MainBottom";

class App extends Component {

    constructor(props) {
        super(props);

        let initLayout = [
            {i: 'header-left', x: 0, y: 0, w: 4, h: 3, static: true}, // logo & heading
            {i: 'header-main', x: 4, y: 0, w: 4, h: 3, static: true}, // search
            {i: 'header-right', x: 8, y: 0, w: 4, h: 3, static: true}, // handles

            {i: 'left', x: 0, y: 3, w: 2, h: 19}, // text selection
            {i: 'center', x: 2, y: 3, w: 8, h: 10}, // center - three different views
            {i: 'right', x: 10, y: 3, w: 2, h: 19}, // word list


            {i: 'bottom', x: 2, y: 13, w: 8, h: 9}, // chart
        ];

        // init state
        this.state = {

            // layout
            displayed: 'home',
            initLayout: initLayout,
            layout : initLayout,
            appWidth: 1500,
            appHeight: 977/34,

            // nlp
            keyword: null,
            textSelection : [],
            concordances: []

        };

        // bind other click events
        this.renderHome = this.renderHome.bind(this);
        this.renderCorpus = this.renderCorpus.bind(this);

        // bind callbacks
        this.selectWordParentCallback = this.selectWordParentCallback.bind(this);
        this.searchKeywordParentCallback = this.searchKeywordParentCallback.bind(this);
    }

    componentDidMount() {
        console.log('app.js did mount, this is its width', document.querySelector('#wrapper').clientWidth, document.querySelector('#wrapper').clientHeight);

        // add event listener when resizing the component
        window.addEventListener('resize', this.handleResize);

        // setting state accordingly
        this.setState({
            appWidth: document.querySelector('#wrapper').clientWidth,
            appHeight: document.querySelector('#wrapper').clientHeight/977*33
        })

    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        console.log('resizing', document.querySelector('#wrapper').clientHeight, this.state.appHeight);
        this.setState({
            appWidth: document.querySelector('#wrapper').clientWidth,
            appHeight: document.querySelector('#wrapper').clientHeight/977*33,
        })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('component did update');
        if(prevState.keyword !== this.state.keyword || prevState.textSelection !== this.state.textSelection){
            console.log('fetching new data');
            this.getData(this.state.keyword, this.state.textSelection)
        }
        else {
            console.log('no need to fetch new data');
        }
    }

    render() {
        let app = this;
        console.log('rendering home for the first time', this.state);

        return (
            <div className="App">
                <Container fluid={true}>
                    <Row style={{height: '100vh', background: '#e2e2e2', overflowY: 'scroll'}} id={'wrapper'}>
                        <GridLayout className="layout" layout={app.state.layout} cols={12} rowHeight={33.2} width={this.state.appWidth}>

                            {/*DASHBOARD*/}
                            <div key="header-left" style={{background:'darkgrey', borderRadius: '5px', border: 'thin solid grey'}}>
                                <Tiles_HeadRowLeft displayed={this.state.displayed}/>
                            </div>

                            <div key="header-main" style={{background:'lightgrey', borderRadius: '5px', border: 'thin solid grey'}}>
                                <Tiles_HeadRowMain displayed={this.state.displayed} searchKeywordParentCallback={this.searchKeywordParentCallback}/>
                            </div>

                            <div key="header-right" style={{background:'lightgrey', borderRadius: '5px', border: 'thin solid grey'}}>
                                <Tiles_HeadRowRight displayed={this.state.displayed} renderHome={this.renderHome}/>
                            </div>

                            {/* LEFT */}
                            <div key="left" className='home-card'>
                                <Tiles_MainLeft displayed={this.state.displayed} renderCorpus={this.renderCorpus}/>
                            </div>

                            {/* CENTER */}
                            <div key="center" className='home-card'>
                                <Tiles_MainCenter displayed={this.state.displayed}/>
                            </div>

                            {/* RIGHT */}
                            <div key="right" className='home-card'>
                                <Tiles_MainRight selectWordParentCallback={this.selectWordParentCallback} displayed={this.state.displayed} concordances={this.state.concordances}/>
                            </div>

                            {/* BOTTOM */}
                            <div key="bottom" style={{borderRadius: '5px', border: 'thin solid grey'}}>
                                <Tiles_MainBottom displayed={this.state.displayed}/>
                            </div>
                        </GridLayout>
                    </Row>
                </Container>
            </div>
        );
    }

    // helper functions
    renderHome(state){
        // log
        console.log('rendering home, state set to:', state);

        this.setState({
            displayed: state,
            layout: this.state.initLayout});
    }
    renderCorpus(state){

        // log
        console.log('rendering journal, state set to:', state);

        // grid for corpus view
        let corpusLayout = [
            {i: 'header-left', x: 0, y: 0, w: 4, h: 3, static: true}, // logo & heading
            {i: 'header-main', x: 4, y: 0, w: 4, h: 3, static: true}, // search
            {i: 'header-right', x: 8, y: 0, w: 4, h: 3, static: true}, // handles

            {i: 'left', x: 0, y: 3, w: 2, h: 19}, // text selection
            {i: 'center', x: 2, y: 3, w: 10, h: 19}, // center - three different views
            {i: 'right', x: 0, y: 0, w: 0, h: 0, static: true}, // word list


            {i: 'bottom', x: 0, y: 0, w: 0, h: 0, static: true}, // chart
        ];

        // set state
        this.setState({
            displayed: 'corpusView',
            layout: corpusLayout })
    }

    getData() {
        console.log(this.state.keyword);
        fetch(
            `/api/getConcordances`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'keyword': this.state.keyword, 'textIDs': [1,2,3] })
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({concordances: data.concordances})
            })
    }

    // callbacks
    searchKeywordParentCallback(keyword){

        // set state -> whenever component updates, it will check if keywords or text selection have changed -> new fetch
        this.setState({keyword: keyword});
    }
    selectWordParentCallback(selection){

    }
}


export default App;