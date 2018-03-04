import axios from 'axios';
import { LOCATION_UPDATE_SUCCESS, LOCATION_UPDATE_FAILURE } from './Types';

export const updateLocation = ({ latitude, longitude }) => (dispatch) => {
  axios.get(`https://api.darksky.net/forecast/7bdebc20f7fee630ad557eb4400cc6a0/${latitude},${longitude}?exclude=hourly,minutely,flags&units=si`)
    .then(response => dispatch({
      type: LOCATION_UPDATE_SUCCESS,
      payload: response.data,
    }))
    .catch(() => dispatch({
      type: LOCATION_UPDATE_FAILURE,
    }));
};
