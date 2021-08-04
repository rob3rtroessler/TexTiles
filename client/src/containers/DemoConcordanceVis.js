import { connect } from "react-redux";
import { createSelector } from "reselect";
import DemoConcordanceVis from "../components/wrapper/DemoConcordanceVis";


import toJS from "../hocs/toJS";
import { getText, getHover, getFetchedData } from "../redux/selectors";


//
const getFData = createSelector(getFetchedData, fetched => {
  return fetched.reduce(
      (fetchedData) => {return fetchedData}
  )
})



const mapStateToProps = (state, ownProps) => ({
  // data: getData(state),
  fetchedData: getFData(state),
  // hover: getHover(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // setHover(letter) {
  //   dispatch(setHover(letter));
  // },
  // incrementRenderCount(mode) {
  //   dispatch(incrementRenderCount("barchart", mode));
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(toJS(DemoConcordanceVis));
