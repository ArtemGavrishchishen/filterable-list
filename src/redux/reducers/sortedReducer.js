import types from '../actionTypes';

const INITIAL_STATE = {
  name: 0,
  job: 0,
  email: 0,
  phone: 0,
  city: 0,
};

function sortedReducer(state = INITIAL_STATE, { type }) {
  switch (type) {
    case types.SORTED_NAME:
      if (state.name === 0) {
        return { ...state, name: 1 };
      }
      if (state.name === 1) {
        return { ...state, name: -1 };
      }
      return { ...state, name: 0 };

    case types.SORTED_JOB:
      if (state.job === 0) {
        return { ...state, job: 1 };
      }
      if (state.job === 1) {
        return { ...state, job: -1 };
      }
      return { ...state, job: 0 };

    case types.SORTED_EMAIL:
      if (state.email === 0) {
        return { ...state, email: 1 };
      }
      if (state.email === 1) {
        return { ...state, email: -1 };
      }
      return { ...state, email: 0 };

    case types.SORTED_PHONE:
      if (state.phone === 0) {
        return { ...state, phone: 1 };
      }
      if (state.phone === 1) {
        return { ...state, phone: -1 };
      }
      return { ...state, phone: 0 };

    case types.SORTED_CITY:
      if (state.city === 0) {
        return { ...state, city: 1 };
      }
      if (state.city === 1) {
        return { ...state, city: -1 };
      }
      return { ...state, city: 0 };

    default:
      return state;
  }
}

export default sortedReducer;
