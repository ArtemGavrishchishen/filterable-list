import types from '../actionTypes';

export default function selectedCityReducer(state = null, { type, payload }) {
  switch (type) {
    case types.SELECTED_CITY:
      return payload;

    default:
      return state;
  }
}
