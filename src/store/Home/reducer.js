import * as types from './actionTypes'

// Initial states
const initialState = {
    allWingList: [],
};

export default function getApiResponse(state = initialState, action = {}) {
    switch (action.type) {
        case types.GET_JOSN_DATA_RES:
            return {
                ...state,
                fetching: true,
                jsonData:action.payload
            }
            case types.UPDATE_JOSN_DATA_RES:
            return {
                ...state,
                fetching: true,
                updatedData:action.payload
            }
        default:
            return state;
    }
}