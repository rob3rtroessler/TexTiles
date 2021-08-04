import { connect } from "react-redux";
import lorem from "lorem-ipsum";
import DemoChat from "../components/wrapper/DemoChat";
import {fetchConcordanceData} from "../utils/fetches";
import { newText, incrementRenderCount, newFetch } from "../redux/actions";
import toJS from "../hocs/toJS";

// redux
import {
  getUsers,
  getTexts,
  getSaturatedColorsArray,
  getFetchedData
} from "../redux/selectors";

const loremOption = {
  count: 2,
  units: "sentences"
};



const mapStateToProps = (state, ownProps) => {
  // console.log('map state', state)
  return {
    users: getUsers(state),
    texts: getTexts(state),
    colors: getSaturatedColorsArray(state),
    fetchedData: getFetchedData(state)
  }
}



const mapDispatchToProps = (dispatch, ownProps) => ({
  generateText() {
    dispatch(
      newText({
        user1: lorem(loremOption),
        user2: lorem(loremOption)
      })
    );

  },
  incrementRenderCount(mode) {
    dispatch(incrementRenderCount("chat", mode));
  },
  fetchData(){
    console.log('in fetchData')
    dispatch(newFetch({
      fetchedData: [{},{},{}]
    }));
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(toJS(DemoChat));
