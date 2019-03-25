import types from '../actionTypes';

const INITIAL_STATE = {
  name: '',
  job: '',
  email: '',
  phone: '',
};

function filteredReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case types.FILTERED_NAME:
      return { ...state, name: payload };

    case types.FILTERED_JOB:
      return { ...state, job: payload };

    case types.FILTERED_EMAIL:
      return { ...state, email: payload };

    case types.FILTERED_PHONE:
      return { ...state, phone: payload };

    default:
      return state;
  }
}

export default filteredReducer;
