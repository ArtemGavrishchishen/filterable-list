import React, { Component } from 'react';
import { connect } from 'react-redux';

import Filter from './Filter/FilterListContainer';
import SelectCity from './SelectCity/SelectCity';
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
        <SelectCity />
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
