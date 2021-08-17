import { connect } from "react-redux";
import { createSelector } from "reselect";
import DemoConcordanceVis from "../components/wrapper/DemoConcordanceVis";
import { countLetters, ALPHABET } from "../utils/stringStats";
import { setHover, incrementRenderCount } from "../redux/actions";
import toJS from "../hocs/toJS";
import { getText, getHover, getFetchedData } from "../redux/selectors";

const getData = createSelector(getText, text => {
  return ALPHABET.map(l => {
    return text.reduce(
        (result, userText, user) => {
          return {
            ...result,
            [user]: countLetters(userText, l)
          };
        },
        { x: l }
    );
  });
});

//
const getFData = createSelector(getFetchedData, fetched => {
  return fetched.reduce(
      (fetchedData) => fetchedData
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
