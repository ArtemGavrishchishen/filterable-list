import { connect } from 'react-redux';

import FilterListView from './FilterListView';
import selectors from '../../redux/selectors';
import actions from '../../redux/actions';

const mapStateToProps = state => ({
  name: selectors.getFilteredName(state),
  job: selectors.getFilteredJob(state),
  email: selectors.getFilteredEmail(state),
  phone: selectors.getFilteredPhone(state),
});

const mapDispatchToProp = {
  filterName: actions.filterName,
  filterJob: actions.filterJob,
  filterEmail: actions.filterEmail,
  filterPhone: actions.filterPhone,
};

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(FilterListView);
