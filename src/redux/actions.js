import types from './actionTypes';

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = users => ({
  type: types.FETCH_SUCCESS,
  payload: users,
});

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

const filterName = name => ({
  type: types.FILTERED_NAME,
  payload: name,
});

const filterJob = job => ({
  type: types.FILTERED_JOB,
  payload: job,
});

const filterEmail = email => ({
  type: types.FILTERED_EMAIL,
  payload: email,
});

const filterPhone = phone => ({
  type: types.FILTERED_PHONE,
  payload: phone,
});

export default {
  fetchRequest,
  fetchSuccess,
  fetchError,
  filterName,
  filterJob,
  filterEmail,
  filterPhone,
};
