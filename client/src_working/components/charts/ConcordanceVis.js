import React, { Component } from 'react'

//import * as d3 from "d3";
const d3 = {
  ...require("d3-shape"),
  ...require("d3-array"),
  ...require("d3-scale"),
  ...require("d3-axis"),
  ...require("d3-selection"),
  ...require("d3-transition")
};

class ConcordanceVis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vis:{
        data: [5]
      }
    }
  }

  componentDidMount() {

    console.log('the props in vis', this.props)

    let vis = this.state.vis;

    // 2. Use the margin convention practice
    vis.margin = {top: 50, right: 20, bottom: 50, left: 20};
    vis.width = this.props.width - vis.margin.left - vis.margin.right; // Use the window's width
    vis.height = this.props.height - vis.margin.top - vis.margin.bottom;

    // append SVG drawing area
    vis.svg = d3.select("#test").append("svg")
        .attr('id', 'concordanceSVG')
        .attr("width", vis.width + vis.margin.left + vis.margin.right)
        .attr("height", vis.height + vis.margin.top + vis.margin.bottom)

    vis.xScale = d3.scaleLinear()
        .domain([0, 5])
        .range([0, this.props.width/2])
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let vis = this.state.vis;

    // update scale
    vis.xScale = d3.scaleLinear()
        .domain([0, 5])
        .range([0, this.props.width/2])

    console.log('check it out', this.props.width)

    vis.width = this.props.width - vis.margin.left - vis.margin.right; // Use the window's width
    vis.height = this.props.height - vis.margin.top - vis.margin.bottom;

    vis.svg
        .attr("width", vis.width + vis.margin.left + vis.margin.right)
        .attr("height", vis.height + vis.margin.top + vis.margin.bottom)

    // rects
    vis.rects = vis.svg.selectAll('rect').data(vis.data)

    vis.rects.enter()
        .append('rect')
        .merge(vis.rects)
        .attr('width', d => vis.xScale(d))
        .attr('height', 10)
        .attr('x', d => d*6)
        .attr('y', 5)



  }


  render() {

    console.log('test', this.props)
    return (
        <div id={'test'}>text</div>
    );
  }
}

export default ConcordanceVis;
