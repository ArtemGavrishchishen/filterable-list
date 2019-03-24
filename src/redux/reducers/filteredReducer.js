import { combineReducers } from 'redux';

import types from '../actionTypes';

function nameReducer(state = '', { type, payload }) {
  switch (type) {
    case types.FILTERED_NAME:
      return payload;

    default:
      return state;
  }
}

function jobReducer(state = '', { type, payload }) {
  switch (type) {
    case types.FILTERED_JOB:
      return payload;

    default:
      return state;
  }
}

function emailReducer(state = '', { type, payload }) {
  switch (type) {
    case types.FILTERED_EMAIL:
      return payload;

    default:
      return state;
  }
}

function phoneReducer(state = '', { type, payload }) {
  switch (type) {
    case types.FILTERED_PHONE:
      return payload;

    default:
      return state;
  }
}

const filteredReducer = combineReducers({
  name: nameReducer,
  job: jobReducer,
  email: emailReducer,
  phone: phoneReducer,
});

export default filteredReducer;
