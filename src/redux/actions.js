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

const sortedName = () => ({
  type: types.SORTED_NAME,
});

const sortedJob = () => ({
  type: types.SORTED_JOB,
});

const sortedEmail = () => ({
  type: types.SORTED_EMAIL,
});

const sortedPhone = () => ({
  type: types.SORTED_PHONE,
});

const sortedCity = () => ({
  type: types.SORTED_CITY,
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
