import { connect } from 'react-redux';

import UserListView from './UserListView';
import actions from '../../redux/actions';
import selectors from '../../redux/selectors';

const mapStateToProps = state => ({
  users: selectors.getUsersPagination(state),
  selectedCity: selectors.getSelectedCity(state),
  sorted: {
    name: selectors.getSortedName(state),
    job: selectors.getSortedJob(state),
    email: selectors.getSortedEmail(state),
    phone: selectors.getSortedPhone(state),
    city: selectors.getSortedCity(state),
  },
});

const mapDispatchToProp = {
  sortedName: actions.sortedName,
  sortedJob: actions.sortedJob,
  sortedEmail: actions.sortedEmail,
  sortedPhone: actions.sortedPhone,
  sortedCity: actions.sortedCity,
};

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(UserListView);
