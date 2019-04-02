import types from '../actionTypes';

const sortedStringUp = key => (a, b) => {
  if (a[key].toLowerCase() > b[key].toLowerCase()) {
    return -1;
  }
  if (a[key].toLowerCase() < b[key].toLowerCase()) {
    return 1;
  }
  return 0;
};

const sortedStringDown = key => (a, b) => {
  if (a[key].toLowerCase() > b[key].toLowerCase()) {
    return 1;
  }
  if (a[key].toLowerCase() < b[key].toLowerCase()) {
    return -1;
  }
  return 0;
};

export default function usersReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;

    case types.SORTED_NAME: {
      if (payload === 1) {
        return state.slice().sort(sortedStringUp('name'));
      }
      if (payload === -1 || payload === 0) {
        return state.slice().sort(sortedStringDown('name'));
      }
      return state;
    }
    case types.SORTED_JOB: {
      if (payload === 1) {
        return state.slice().sort(sortedStringUp('job'));
      }
      if (payload === -1 || payload === 0) {
        return state.slice().sort(sortedStringDown('job'));
      }
      return state;
    }

    case types.SORTED_EMAIL: {
      if (payload === 1) {
        return state.slice().sort(sortedStringUp('email'));
      }
      if (payload === -1 || payload === 0) {
        return state.slice().sort(sortedStringDown('email'));
      }
      return state;
    }

    case types.SORTED_PHONE: {
      if (payload === 1) {
        return state.slice().sort(sortedStringUp('phone'));
      }
      if (payload === -1 || payload === 0) {
        return state.slice().sort(sortedStringDown('phone'));
      }
      return state;
    }

    case types.SORTED_CITY: {
      if (payload === 1) {
        return state.slice().sort(sortedStringUp('city'));
      }
      if (payload === -1 || payload === 0) {
        return state.slice().sort(sortedStringDown('city'));
      }
      return state;
    }

    default:
      return state;
  }
}
