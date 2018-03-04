import { LOCATION_UPDATE_SUCCESS, LOCATION_UPDATE_FAILURE } from '../actions/Types';

const INITIAL_STATE = {
  response: '',
  error: 'Choose a location on the map.',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOCATION_UPDATE_SUCCESS:
      return { response: action.payload, error: '' };
    case LOCATION_UPDATE_FAILURE:
      return { response: '', error: 'Choose a location on the map.' };
    default:
      return state;
  }
};
