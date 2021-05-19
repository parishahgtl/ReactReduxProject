import * as types from './actionTypes';
import axios from 'axios';

export const getJsonData = () => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/comments',
        })
        .then(function (response) {
            dispatch({type: types.GET_JOSN_DATA_RES, payload: response.data})
        })
    }
}
export const addJsonData = (data) => {
    return (dispatch) => {
        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data:data
        })
        .then(function (response) {
            debugger
            dispatch({type: types.UPDATE_JOSN_DATA_RES, payload: response.data})
        })
    }
}
