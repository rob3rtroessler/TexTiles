import React, { Component } from 'react'
import Row from "react-bootstrap/Row"

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
      }
    }
  }

  componentDidMount() {
    let vis = this.state.vis;

    // append SVG drawing area
    vis.svg = d3.select("#concordance_container").append("svg")
        .attr('id', 'concordanceSVG')
        .attr("width", this.props.width )
        .attr("height", this.props.height )
  }



  componentDidUpdate(prevProps, prevState, snapshot) {
    let vis = this.state.vis;

    // update along x axis
    vis.width = this.props.width;


    console.log(this.props.width, prevProps.width)


    // update along y axis - we want 20 lines per 'page'
    let lineHeight = this.props.height/20
    let svgHeight = this.props.data.hits * (lineHeight)

    vis.height = svgHeight;

    // update svg
    vis.svg
        .attr("width", vis.width )
        .attr("height", vis.height)

    // create a group for each concordance line
    vis.concordance_groups = vis.svg.selectAll('g').data(this.props.data.concordances)

    // merged groups
    vis.merged_concordance_groups = vis.concordance_groups
        .enter()
        .append('g')
        .attr('class', 'concordance_group')
        .merge(vis.concordance_groups)
        .attr('transform', (d,i) => `translate(0,${(lineHeight)*i})`)

    vis.merged_concordance_groups.exit().remove()

    // rects
    vis.rects = vis.merged_concordance_groups.selectAll('rect').data(function(d) {return d.words})

    // merged rects
    vis.rects_merged = vis.rects
        .enter()
        .append('rect')
        .merge(vis.rects)
        .attr('class', d => d)

    // then select and apply attributes => needs to be done like that
    vis.rects_merged
        .attr('width', vis.width/20)
        .attr('height', this.props.height/40)
        .attr('y', 5)
        .attr('x', (d,i)=> i*vis.width/15)
        .attr('fill', 'grey')
        .attr('stroke', 'black')
        .on('mouseover', function(d, i){
          // seems to be an old d3 version!
          console.log(d)
          d3.selectAll(`.${d}`).attr('fill','red')
        })
        .on('mouseout', function(d, i){
          // seems to be an old d3 version!
          console.log(d)
          d3.selectAll(`.${d}`).attr('fill','grey')
        })
  }


  render() {
    return (
        <div id={'concordance_parent'}>
          <div id={'concordance_container'} style={{padding: 5}} />
        </div>
    );
  }
}

export default ConcordanceVis;
