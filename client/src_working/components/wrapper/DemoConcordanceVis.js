import React from "react";
import ConcordanceVis from "../charts/ConcordanceVis";

const DemoConcordanceVis = props => {
    console.log('these props in wrapper', props)
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <ConcordanceVis xLabel="Characters" yLabel="Occurrences" {...props} />
        </div>
    );
}


export default DemoConcordanceVis;
