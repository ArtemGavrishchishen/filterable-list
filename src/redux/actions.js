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

const selectCity = city => ({
  type: types.SELECTED_CITY,
  payload: city,
});

const paginationPrev = () => ({
  type: types.TOGGLE_PREVIOUS_PAGE,
});
const paginationNext = maxPage => ({
  type: types.TOGGLE_NEXT_PAGE,
  payload: maxPage,
});

const sortedName = key => ({
  type: types.SORTED_NAME,
  payload: key,
});

const sortedJob = key => ({
  type: types.SORTED_JOB,
  payload: key,
});

const sortedEmail = key => ({
  type: types.SORTED_EMAIL,
  payload: key,
});

const sortedPhone = key => ({
  type: types.SORTED_PHONE,
  payload: key,
});

const sortedCity = key => ({
  type: types.SORTED_CITY,
  payload: key,
});

export default {
  fetchRequest,
  fetchSuccess,
  fetchError,
  filterName,
  filterJob,
  filterEmail,
  filterPhone,
  selectCity,
  paginationPrev,
  paginationNext,
  sortedName,
  sortedJob,
  sortedEmail,
  sortedPhone,
  sortedCity,
};
