import types from '../actionTypes';

export default function selectedCityReducer(
  state = 'Select...',
  { type, payload },
) {
  switch (type) {
    case types.SELECTED_CITY:
      return payload;

    default:
      return state;
  }
}
