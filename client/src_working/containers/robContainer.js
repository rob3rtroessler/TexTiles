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
                RobContainer with {width}x{height}
            </div>
        )
    }
}

export default RobContainer;
