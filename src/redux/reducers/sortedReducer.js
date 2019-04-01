import types from '../actionTypes';

const INITIAL_STATE = {
  name: 0,
  job: 0,
  email: 0,
  phone: 0,
  city: 0,
};

const getSortedValue = value => {
  let sortedNumber = 0;
  if (value === 0) {
    sortedNumber = 1;
  }
  if (value === 1) {
    sortedNumber = -1;
  }

  return sortedNumber;
};

function sortedReducer(state = INITIAL_STATE, { type }) {
  switch (type) {
    case types.SORTED_NAME: {
      const sortedValue = getSortedValue(state.name);
      return { ...state, name: sortedValue };
    }

    case types.SORTED_JOB: {
      const sortedValue = getSortedValue(state.job);
      return { ...state, job: sortedValue };
    }

    case types.SORTED_EMAIL: {
      const sortedValue = getSortedValue(state.email);
      return { ...state, email: sortedValue };
    }

    case types.SORTED_PHONE: {
      const sortedValue = getSortedValue(state.phone);
      return { ...state, phone: sortedValue };
    }

    case types.SORTED_CITY: {
      const sortedValue = getSortedValue(state.city);
      return { ...state, city: sortedValue };
    }

    default:
      return state;
  }
}

export default sortedReducer;
