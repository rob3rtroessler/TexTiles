// reducer

const initialState = {
    data: {
        hits: 1,
        concordances : [
            {author: "authorPlaceholder", title: "titlePlaceholder", words: ['word1', 'word2']}
        ],
        topWords: [
            {word: "word1", value: 1},
            {word: "word2", value: 1}]

    }};

const fetchKeyWord = (state = initialState, action) => {
    switch (action.type){
        case 'FETCH_KEYWORD':
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
};

export default fetchKeyWord

