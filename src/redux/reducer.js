import { ADD_FAVOURITE, DELETE_CITY, DELETE_FAVOURITE, GET_CITY, GET_DETAILS, SET_FLAG } from "./constants";

const initialState = {
    cities: [],
    favourites: [],
    cityDetails: [],
    flag: false
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
            console.log(state.cities.filter(e=> e.name===payload))
            return{
                ...state,
                favourites: [...state.favourites, ...state.cities.filter(e => e.name === payload)]
            }
        case DELETE_FAVOURITE:
            return{
                ...state,
                favourites: [...state.favourites].filter(e => e.name !== payload)
            }
        case GET_DETAILS:
            return{
                ...state,
                cityDetails: state.cities.filter(e => e.name === payload)
            }
        case SET_FLAG:
            return{
                ...state,
                flag: payload
            }
        default:
            return state;
    }
}

export default rootReducer