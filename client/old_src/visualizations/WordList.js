import React, { Component } from 'react';

// d3
import * as d3 from "d3";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';


class WordList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            vis:{}
        };

    }

    componentDidMount() {
        console.log('wordList-Tile did mount');
        this.initVis();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('updating wordList-Tile', this.props.topWords);
        if (this.props.topWords.length !== 0){
            this.updateVis();
        }

    }


    initVis(){
        let vis = this.state.vis;

        // use margin conventions
        vis.margin = {top: 10, right: 10, bottom: 30, left: 30};
        vis.width = 200 - vis.margin.left - vis.margin.right; // Use the window's width
        vis.height = 750 - vis.margin.top - vis.margin.bottom; // Use the window's height

        // x scale
        vis.xScale = d3.scaleLinear()
            .range([0, vis.width]); // output

        // y scale
        vis.yScale = d3.scaleBand()
            .range([0, vis.height]); // output


        // 1. Add the SVG to the page and employ #2
        vis.svg = d3.select("#wordList").append("svg")
            .attr("width", vis.width + vis.margin.left + vis.margin.right)
            .attr("height", vis.height + vis.margin.top + vis.margin.bottom)
            .append("g")
            .attr("transform", "translate(" + vis.margin.left + "," + vis.margin.top + ")");

    /*    // 2. Call the x axis in a group tag
        vis.svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + vis.height + ")")
            .call(d3.axisBottom(vis.xScale)); // Create an axis component with d3.axisBottom

        // 3. Call the y axis in a group tag
        vis. svg.append("g")
            .attr("class", "y axis")
            .call(d3.axisLeft(vis.yScale)); // Create an axis component with d3.axisLeft*/
    }

    updateVis(){

        // variables
        let vis = this.state.vis;
        let data = this.props.topWords;

        // log
        console.log('updateVis called');

        // updating domains
        vis.xScale.domain([0, d3.max(data, function (d) {
            return d.value
        })]);
        vis.yScale.domain(data.map(d => d.word)).paddingInner(0.1);

       /* vis.svg.append("g")
            .attr('class', 'x-axis')
            .attr("transform", "translate(0," + vis.height + ")")
            .call(d3.axisBottom(vis.xScale))
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 9)
            .attr("dy", ".35em")
            .attr("transform", "rotate(90)")
            .style("text-anchor", "start");

        vis.svg.append("g")
            .call(d3.axisLeft(vis.yScale))
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Speed");*/


        vis.bars = vis.svg.selectAll(".bar")
            .data(data);
        vis.bars.enter().append("rect")
            .merge(vis.bars)
            .attr("class", 'bar')
            .attr("x", function (d) {
                return vis.xScale(0);
            })
            .attr("y", function (d) {
                return vis.yScale(d.word);
            })
            .transition().duration(800)
            .attr("width", function (d) {
                return vis.xScale(d.value);
            })
            .attr("height", vis.yScale.bandwidth())
            .attr('fill', function(d){
                if (true) {
                    return 'red'
                } else {
                    return 'grey'
                }
            })

        vis.words = vis.svg.selectAll(".word")
            .data(data);

        vis.words.enter().append("text")
            .merge(vis.words)
            .attr("class", 'word')
            .attr("x", function (d) {
                return vis.xScale(0);
            })
            .attr("y", function (d) {
                return vis.yScale(d.word);
            })
            .text(function (d) {
                return d.word;
            })

    }

    render() {
        return (
            <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center">
                <div className='align-self-center' id='wordList' style={{height: '100%'}}/>
            </Row>
        );
    }
}

export default WordList;