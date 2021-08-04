import {createSelector} from 'reselect'

export const getFetchedData = state => state

export const fetchData = createSelector(getFetchedData, data => {
    console.log('hier koennte ich evtl fetchen')
    return data
})