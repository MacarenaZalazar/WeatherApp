import { ADD_FAVOURITE, DELETE_CITY, DELETE_FAVOURITE, GET_CITY, GET_DETAILS } from "./constants";

const initialState = {
    cities: [],
    favourites: [],
    cityDetails: []
};

const rootReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case GET_CITY:
            return{
                ...state,
                cities: [...state.cities, payload]
            }
        case DELETE_CITY:
            return{
                ...state,
                cities: [...state.cities].filter(e => e.name !== payload)
            }
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites: [...state.favourites, payload]
            }
        case DELETE_FAVOURITE:
            return{
                ...state,
                favourites: [...state.favourites].filter(e => e.name !== payload)
            }
        case GET_DETAILS:
            return{
                ...state,
                cityDetails: [payload]
            }
        default:
            return state;
    }
}

export default rootReducer