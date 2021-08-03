import React, { Component } from 'react';

// d3
import * as d3 from "d3";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';


class HealthGraph extends Component {

    constructor(props) {
        super(props);

        this.state = {
            vis:{}
        };

    }

    componentDidMount() {
        console.log('health comp did mount');
        this.initVis();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('health comp did update');
        this.updateVis();
    }


    initVis(){

        let vis = this.state.vis;

        // 2. Use the margin convention practice
        vis.margin = {top: 50, right: 50, bottom: 50, left: 50};
        vis.width = 900 - vis.margin.left - vis.margin.right; // Use the window's width
        vis.height = 250 - vis.margin.top - vis.margin.bottom; // Use the window's height

// The number of datapoints
        vis.n = 21;

// 5. X scale will use the index of our data
        vis.xScale = d3.scaleLinear()
            .domain([0, vis.n-1]) // input
            .range([0, vis.width]); // output

// 6. Y scale will use the randomly generate number
        vis.yScale = d3.scaleLinear()
            .domain([0, 1]) // input
            .range([vis.height, 0]); // output

        // 7. d3's line generator
        vis.line = d3.line()
            .x(function(d, i) { return vis.xScale(i); }) // set the x values for the line generator
            .y(function(d) { return vis.yScale(d.y); }) // set the y values for the line generator
            .curve(d3.curveMonotoneX); // apply smoothing to the line

        // 1. Add the SVG to the page and employ #2
        vis.svg = d3.select("#graph").append("svg")
            .attr("width", vis.width + vis.margin.left + vis.margin.right)
            .attr("height", vis.height + vis.margin.top + vis.margin.bottom)
            .append("g")
            .attr("transform", "translate(" + vis.margin.left + "," + vis.margin.top + ")");

        // 3. Call the x axis in a group tag
        vis.svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + vis.height + ")")
            .call(d3.axisBottom(vis.xScale)); // Create an axis component with d3.axisBottom

        // 4. Call the y axis in a group tag
        vis. svg.append("g")
            .attr("class", "y axis")
            .call(d3.axisLeft(vis.yScale)); // Create an axis component with d3.axisLeft


        // 9. Append the path, bind the data, and call the line generator
        vis.path = vis.svg.append("path")
            .attr("class", "line") // Assign a class for styling
            .attr('fill', 'none')
            .attr('stroke', '#ffaa22')
            .attr('stroke-width', 2);

        this.updateVis()
    }

    updateVis(){

        // variables
        let vis = this.state.vis;

        // log
        console.log('updateVis called');


        // 8. An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
        vis.dataset = d3.range(vis.n).map(function(d) { return {"y": d3.randomUniform(1)() } });



        // 9. Append the path, bind the data, and call the line generator
        vis.path.datum(vis.dataset).transition().duration(800).attr("d", vis.line); // 11. Calls the line generator


        // 12. Appends a circle for each datapoint
        let dots = vis.svg.selectAll(".dot")
            .data(vis.dataset);

        dots
            .enter().append("circle") // Uses the enter().append() method
            .merge(dots)
            .transition()
            .duration(800)
            .attr("class", "dot") // Assign a class for styling
            .attr("cx", function(d, i) { return vis.xScale(i) })
            .attr("cy", function(d) { return vis.yScale(d.y) })
            .attr("r", 5)
            .attr('fill', '#ffaa22')
            .attr('stroke', 'transparent')
            .attr('stroke-width', 2)
    }

    render() {
        return (
            <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center">
                <div className='align-self-center' id='graph' style={{height: '100%'}}/>
            </Row>
        );
    }
}

export default HealthGraph;