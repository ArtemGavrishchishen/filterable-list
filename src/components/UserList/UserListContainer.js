import { connect } from 'react-redux';

import UserListView from './UserListView';
import selectors from '../../redux/selectors';

const mapStateToProps = state => ({
  users: selectors.getUsersPagination(state),
  selectedCity: selectors.getSelectedCity(state),
});

export default connect(
  mapStateToProps,
  null,
)(UserListView);
