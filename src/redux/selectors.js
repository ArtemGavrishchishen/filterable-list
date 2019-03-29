import { createSelector } from 'reselect';

const limit = 10; // delete
const getAllUsers = state => state.users;
const getFilteredName = state => state.filtered.name;
const getFilteredJob = state => state.filtered.job;
const getFilteredEmail = state => state.filtered.email;
const getFilteredPhone = state => state.filtered.phone;
const getSelectedCity = state => state.selectedCity;
const getCurrentPage = state => state.currentPage;

const getFilteredUsers = createSelector(
  [
    getAllUsers,
    getFilteredName,
    getFilteredJob,
    getFilteredEmail,
    getFilteredPhone,
  ],
  (users, filterName, filterJob, filterEmail, filterPhone) =>
    users.filter(
      ({ name, job, email, phone }) =>
        name.toLowerCase().includes(filterName.toLowerCase()) &&
        job.toLowerCase().includes(filterJob.toLowerCase()) &&
        email.toLowerCase().includes(filterEmail.toLowerCase()) &&
        phone.toLowerCase().includes(filterPhone.toLowerCase()),
    ),
);

const getAllUsersCity = createSelector(
  [getAllUsers],
  users => users.map(user => user.city).filter((v, i, a) => a.indexOf(v) === i),
);

const getSelectedCityAndFilteredUsers = createSelector(
  [getFilteredUsers, getSelectedCity],
  (users, city) =>
    users.filter(user => (city !== null ? user.city === city : user)),
);

const getMaxPage = createSelector(
  [getSelectedCityAndFilteredUsers],
  users => Math.ceil(users.length / limit),
);

const getUsersPagination = createSelector(
  [getSelectedCityAndFilteredUsers, getCurrentPage],
  (users, page) =>
    page === 1
      ? users.slice(0, limit)
      : users.slice(page * limit - limit, page * limit),
);

export default {
  getAllUsers,
  getFilteredName,
  getFilteredJob,
  getFilteredEmail,
  getFilteredPhone,
  getSelectedCity,
  getFilteredUsers,
  getAllUsersCity,
  getSelectedCityAndFilteredUsers,
  getCurrentPage,
  getMaxPage,
  getUsersPagination,
};
