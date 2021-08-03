import React, { Component, useState, useEffect,useRef } from 'react';

// d3
import * as d3 from "d3";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from'react-bootstrap/Col'


// dealing with height etc.
// https://stackoverflow.com/questions/43817118/how-to-get-the-width-of-a-react-element/56011277

class ConcordanceVis extends Component {

    constructor(props) {
        super(props);

        this.state = {
            vis:{}
        };

    }



    componentDidMount() {

        console.log('Concordance Vis did mount, initializing svg without having any proper height and width; all important vis data will be stored in the state');
        this.initVis();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Concordance Vis did update, call updateVis()', prevProps, this.props);

        // if data has been loaded/requested, call update vis
        if (this.props.data.concordances){
            this.updateVis();
        }


        // if (this.props.data.concordances){
        //
        //     if(prevProps.dimensions.height === this.props.dimensions.height && prevProps.dimensions.width === this.props.dimensions.width){
        //         console.log('dimensions are the same')
        //     }
        //     else{
        //         console.log('dimensions have changed')
        //     }
        // }


        //
    }

    // initVis initializes the visualization, i.e. sets margins, dimensions, etc.
    // initVis should be called again, when the parent container gets resized.
    initVis(){

        let vis = this.state.vis;

        // 2. Use the margin convention practice
        vis.margin = {top: 50, right: 20, bottom: 50, left: 20};
        vis.width = this.props.dimensions.width - vis.margin.left - vis.margin.right; // Use the window's width
        vis.height = 400 - vis.margin.top - vis.margin.bottom;
        vis.rowHeight = 20;

        console.log('initVis with following width', this.props.dimensions.width)

        // append SVG drawing area
        vis.svg = d3.select("#concordanceVis").append("svg")
            .attr('id', 'concordanceSVG')
            .attr("width", vis.width + vis.margin.left + vis.margin.right)
            .attr("height", vis.height + vis.margin.top + vis.margin.bottom)
            // .append("g")
            // .attr("transform", "translate(" + vis.margin.left + "," + vis.margin.top + ")");

        // append tooltip div
        vis.tooltipDiv = d3.select("#concordanceVis").append("div")
            .attr("class", "tooltip")
            .style("width", vis.svg.width)
            .style("opacity", 0)
            .style("left", "0px")
            .style("top", "0px");


    }

    updateVis(){
        let vis = this.state.vis;

        console.log('in update', this.props.dimensions)

        vis.svg
            .attr("width", this.props.dimensions.width + vis.margin.left + vis.margin.right)
            .attr("height", this.props.dimensions.height + vis.margin.top + vis.margin.bottom)
    }

    updateVis2(){
        let vis = this.state.vis;

        console.log('in updateVis', this.props.dimensions)
        // before we (re)draw any elements, update height and width

        d3.select("#concordanceSVG")
            .attr("width", this.props.dimensions.width + vis.margin.left + vis.margin.right)
            .attr("height", this.props.dimensions.height + vis.margin.top + vis.margin.bottom)

        let texTileWidth = (vis.width - 14*3)/15

        // error checking
        console.log('checking how many concordanceRows we need => ', this.props.data.concordances.length);

        let data = this.props.data.concordances

        // load data and create placeholder rows
        let selection = vis.svg.selectAll(".concordanceLine")
            .data(data)

        // define entering rows
        let enter = selection.enter()
            .append("g")
            .attr("class", 'concordanceLine')
            .attr("transform", function(d, i) {
                return `translate(0, ${i * vis.rowHeight})`;
            });

        // remove exiting rows, before you merge them with the rows that enter
        selection.exit().remove();
        selection = selection.merge(enter)

        // iterate over all rows in the updated/merged selection
        selection.each(function(row,i){

            // generate hover info
            let html = `word environment for <b>[SEARCHWORD]</b> in <span style="font-style: italic">[AUTHOR]:[TITLE]</span> on pp. [PAGE]: 
</br>`;

            // recreate the sentence
            row.words.forEach(word => {
                //let color = lookUpColor(word);
                let color ='blue';
                html += `<span style="font-size: 1.3vh; background-color: ${color}" class=${word}><b>${word}</b></span> `
            });

            // here, one could add a condition to check for separator rows (title rows, with a specific key)

            // grab data, i.e. all words in the concordance line that should be visualized as rectangles
            let rectangles = d3.select(this).selectAll("rect").data(row.words);

            // draw rectangles
            rectangles.enter().append("rect")
                .attr("class", function (d){return `tile word_class_${d} ${row.bookID}`}) // in order to highlight words, use classname=word; also, assign parent book to every word
                .attr("width", texTileWidth)
                .attr("height", 12)
                .attr("x", function (d, i) { return (i * texTileWidth*5/4) })
                .attr('fill', 'lightgrey')
                .on('mouseover', function(event, d){

                    // first, highlight tile
                    d3.select(this)
                        .style('fill', 'red')

                    // display tooltip
                    vis.tooltipDiv
                        .style("opacity", 0.88);

                    // position tooltip
                    vis.tooltipDiv
                        .html(html)
                        .style("left", 0 + 'px')
                        .style("top", (event.offsetY) + 10 + "px")
                })
                .on('mouseout', function(d){
                    // tooltip
                    vis.tooltipDiv
                        .style("opacity", 0)
                        .style("left", 0 + 'px')
                        .style("top", 0 + "px")
                })
        })
    }


    render() {
        return (
            <div id='concordanceVis' style={{width: '100%'}}/>
        );
    }
}

export default ConcordanceVis;