import React from "react";
import LineChartVis from "../components/charts/LineChartVis";
import {connect} from "react-redux";
import toJS from "../hocs/toJS";
import DemoConcordanceVis from "../components/wrapper/DemoConcordanceVis";
import {getFetchedData, getHover} from "../redux/selectors";
import {incrementRenderCount, setHover} from "../redux/actions";
import {createSelector} from "reselect";


const extractData = (word) => {
    console.log('in extract', word)
    return {}
}

const fetchData = createSelector(getFetchedData, word => {
    return extractData(word);
})

//
//     console.log(word.reduce())
//
//
//     // now fetch
//     fetch(
//         `/api/getData`,
//         {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json, text/plain, */*',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ 'keyword': word, 'textIDs': [1,2,3] })
//         }
//     )
//         .then((response) => response.json())
//         .then((data) => {
//             return {data:data}
//         })
//
//     // then return stuff
//
// })

const LineChartContainer = props => {
    console.log('LineChartProps:', props)
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <LineChartVis {...props} />
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return({
        fetchedData: fetchData(state)

    })
};

const mapDispatchToProps = (dispatch, ownProps) => ({


});


export default connect(mapStateToProps, mapDispatchToProps)(toJS(LineChartContainer));
