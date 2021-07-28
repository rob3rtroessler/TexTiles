import React, { Component } from 'react'
import * as d3 from "d3";

class BarChart extends Component {
    constructor(props){
        super(props)
        this.createBarChart = this.createBarChart.bind(this)
    }
    componentDidMount() {
        this.createBarChart()
    }
    componentDidUpdate() {
        console.log('height has changed',this.props.size.height)

        this.createBarChart()
    }
    createBarChart() {
        console.log('barchart called', d3.max(this.props.data), this.props.size.height)
        let node = this.node
        let dataMax = d3.max(this.props.data)
        let yScale = d3.scaleLinear()
            .domain([0, dataMax])
            .range([0, this.props.size.height])

        // let rects = d3.select(node)
        //     .selectAll('rect')
        //     .data(this.props.data)
        //
        // rects.enter().append('rect')
        //     .merge(rects)
        //     .style('fill', '#fe9922')
        //     .attr('x', (d,i) => i * 25)
        //     .attr('y', d => this.props.size.height - yScale(d))
        //     .attr('height', d => yScale(d))
        //     .attr('width', 25)
        //
        // rects
        //     .on('mouseover', function(event, data){
        //         d3.select(this)
        //             .attr('fill', 'red')
        //     })
        d3.select(node)
            .selectAll('rect')
            .data(this.props.data)
            .enter()
            .append('rect')

        d3.select(node)
            .selectAll('rect')
            .data(this.props.data)
            .exit()
            .remove()

        d3.select(node)
            .selectAll('rect')
            .data(this.props.data)
            .style('fill', '#fe9922')
            .attr('x', (d,i) => i * this.props.size.width/5)
            .attr('y', d => this.props.size.height - yScale(d))
            .attr('height', d => yScale(d))
            .attr('width', this.props.size.width/10)
        //
        // rects.exit().remove()
    }
    render() {
        return <svg ref={node => this.node = node}
                    width={this.props.size.width} height={this.props.size.height}>
        </svg>
    }
}
export default BarChart