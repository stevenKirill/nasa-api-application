import axiosInstance from '../api/axios';
import key from '../api/key';
import {startLoad, success, fail} from './asteroidsReducer'; 

// Функция загрузки данных по астероидам
export function loadAsteroids(params) {
    const {start,end} = params;
    return (dispatch) => {
        dispatch(startLoad());
        axiosInstance.get(`/neo/rest/v1/feed`, {
            params: {
                start_date: start,
                end_date: end,
                api_key: key,
            }
        })
        .then((response) => {
            const {near_earth_objects} = response.data;
            const dates = Object.keys(near_earth_objects);
            let data = [];
            for(const date of dates) {
                data = data.concat(near_earth_objects[date]);
            }
            return dispatch(success(data));
        })
        .catch((err) => {
            console.error(err,'=>> error');
            dispatch(fail())
        })
    }
}