import { createSelector } from 'reselect';

const getAllUsers = state => state.users;
const getFilteredName = state => state.filtered.name;
const getFilteredJob = state => state.filtered.job;
const getFilteredEmail = state => state.filtered.email;
const getFilteredPhone = state => state.filtered.phone;

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

export default {
  getAllUsers,
  getFilteredName,
  getFilteredJob,
  getFilteredEmail,
  getFilteredPhone,
  getFilteredUsers,
};
