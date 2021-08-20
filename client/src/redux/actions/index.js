export const FETCH_KEYWORD = 'FETCH_KEYWORD'


export const fetchKeyWord = word => {
    return {
        type: FETCH_KEYWORD,
        payload: word,
    };
};
