import React from "react";
import { connect } from "react-redux"
import {fetchKeyWord} from '../../redux/actions'
import store from "../../redux";

class SearchKeyWord extends React.Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {

        // grab keyword
        const keyword = document.getElementById('keyWordInput').value

        console.log('fetching data, keyword:', keyword)

        fetch(
            `/api/getData`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'keyword': keyword, 'textIDs': [1,2,3] })
            }
        )
            .then(response => response.json())
            .then(data => {

                // log
                console.log('Success:', data);

                // all done. Now add this to the store
                store.dispatch({ type: 'FETCH_KEYWORD', payload: data})


            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }


    render() {
        return (
            <div>
                <input id="keyWordInput"/>
                <button onClick={this.fetchData}>fetch & store</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    //console.log('state:', state)
    //console.log('props:', ownProps)
    // now make the state to their props
    return state.fetch
}

const mapDispatchToProps = (dispatch) => ({
    fetchedData: (word) => dispatch(fetchKeyWord(word)),
})

export default connect(mapStateToProps, mapDispatchToProps())(SearchKeyWord);