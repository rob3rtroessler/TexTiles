import React from "react";

class RobContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        const {height, width}= this.props
        return (
            // div container needs to have 100% height and width, otherwise withMeasure will not work properly
            <div style={{ width: "100%", height: "100%" }}>
                <h1>RobContainer</h1>
                <h4>width: {width.toFixed(2)}</h4>
                <h4>height: {height.toFixed(2)}</h4>
            </div>
        )
    }
}

export default RobContainer;
