import React, { Component } from 'react';
import Measure from 'react-measure'

// own
import ConcordanceVis from "./ConcordanceVis.js"
import ListedCorpusItem from "../elements/ListedCorpusItem";
import BarChart from "./BarChart";


class ConcordanceVisContainer extends Component {
    state = {
        dimensions: {
            width: -1,
            height: -1,
        },
    }


    componentDidMount() {
        const { width, height } = this.state.dimensions

        console.log('vis mounted', width, height)
    }

    render() {
        const { width, height } = this.state.dimensions

        console.log('rendered vis', width, height)

        return (
            <Measure
                bounds
                onResize={contentRect => {
                    this.setState({ dimensions: contentRect.bounds })
                }}
            >
                {({ measureRef }) => (
                    <div ref={measureRef} style={{width:'100%'}}>
                        {/*<ConcordanceVis dimensions={ {height:height, width: width} } data={this.props.data}/>*/}
                        <BarChart data={[5,10,1,3]} size={{height:height, width: width}} />

                    </div>
                )}
            </Measure>
        )
    }
}

export default ConcordanceVisContainer;