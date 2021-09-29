import Swal from "sweetalert2"
import { ADD_FAVOURITE, DELETE_CITY, DELETE_FAVOURITE, GET_CITY, GET_DETAILS } from "./constants"
import axios from "axios"
const {API_KEY} = process.env

export const getCity =  (city) => {
   return async (dispatch) => {
        try {
            let info = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            info = info.data.map(e => {
                return {
                    min: Math.round(e.main.temp_min),
                    max: Math.round(e.main.temp_max),
                    img: `http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,
                    wind: e.wind.speed,
                    temp: e.main.temp,
                    name: e.name,
                    weather: e.weather[0].main,
                    clouds: e.clouds.all,
                    latitud: e.coord.lat,
                    longitud: e.coord.lon
                }
            })
            dispatch({action: GET_CITY, payload: info})
            
        } catch (error) {
            Swal.fire({title: 'City not found'})
        }
    }
}

export const getDetails =  (city) => {
    return {actions: GET_DETAILS, payload: city}
}

export const addFavourite =  (city) => {
    return {actions: ADD_FAVOURITE, payload: city}
}

export const deleteCity =  (city) => {
    return {actions: DELETE_CITY, payload: city}
}

export const deleteFavourite =  (city) => {
    return {actions: DELETE_FAVOURITE, payload: city}
}
