import React, { Component } from 'react';
import { connect } from 'react-redux';

import Filter from './Filter/FilterListContainer';
import UserList from './UserList/UserListContainer';
import operations from '../redux/operations';

class App extends Component {
  state = {};

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  render() {
    return (
      <>
        <Filter />
        <UserList />
      </>
    );
  }
}

const mapDispatchToProp = {
  getUsers: operations.fetchItems,
};

export default connect(
  null,
  mapDispatchToProp,
)(App);
