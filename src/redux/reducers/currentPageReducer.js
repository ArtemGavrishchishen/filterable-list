import types from '../actionTypes';

const initialState = 1;
export default function paginationReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case types.SELECTED_CITY:
      return 1;

    case types.TOGGLE_PREVIOUS_PAGE:
      if (state === 1) {
        return state;
      }
      return state - 1;

    case types.TOGGLE_NEXT_PAGE:
      if (state >= payload) {
        return payload;
      }
      return state + 1;

    default:
      return state;
  }
}
