import Swal from "sweetalert2"
import { ADD_FAVOURITE, DELETE_CITY, DELETE_FAVOURITE, GET_CITY, GET_DETAILS, SET_FLAG } from "./constants"
import axios from "axios"
const {REACT_APP_API_KEY} = process.env

export const getCity =  (city) => {
   return async (dispatch) => {
        try {
            let info = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_API_KEY}&units=metric`)
            info =  { min: Math.round(info.data.main.temp_min),
                    max: Math.round(info.data.main.temp_max),
                    img: `http://openweathermap.org/img/wn/${info.data.weather[0].icon}@2x.png`,
                    wind: info.data.wind.speed,
                    temp: Math.round(info.data.main.temp),
                    name: info.data.name,
                    weather: info.data.weather[0].main,
                    clouds: info.data.clouds.all,
                    latitud: info.data.coord.lat,
                    longitud: info.data.coord.lon
                }
            dispatch({type: GET_CITY, payload: info})
            
        } catch (error) {
            Swal.fire({
                title: 'City not found', 
                backdrop: "rgba(10,18,42,0.6)",
                background: 'rgba(255, 255, 255, 0.9)',
                icon: "error",
                confirmButtonColor: "#000"})
        }
    }
}

export const getDetails =  (city) => {
    return {type: GET_DETAILS, payload: city}
}

export const addFavourite =  (city) => {
    return {type: ADD_FAVOURITE, payload: city}
}

export const deleteCity =  (city) => {
    return {type: DELETE_CITY, payload: city}
}

export const deleteFavourite =  (city) => {
    return {type: DELETE_FAVOURITE, payload: city}
}

export const setFlag = () => {
    return {type: SET_FLAG, payload: true}
}