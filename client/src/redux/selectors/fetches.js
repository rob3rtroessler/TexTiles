import {createSelector} from 'reselect'

export const getFetchedData = state => state

export const fetchedData = createSelector(getFetchedData, data => {
    return data
})