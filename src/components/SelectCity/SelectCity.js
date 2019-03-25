import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import selectors from '../../redux/selectors';
import actions from '../../redux/actions';

const options = usersCity =>
  usersCity.map(city => ({ value: city, label: city }));

const SelectCity = props => {
  const { usersCity, selectedCity, onSelectCity } = props;
  const selected = { value: selectedCity, label: selectedCity };
  return (
    <Select
      value={selected}
      onChange={city => onSelectCity(city.value)}
      options={options(usersCity)}
      autoFocus
    />
  );
};

const mapStateToProps = state => ({
  usersCity: selectors.getAllUsersCity(state),
  selectedCity: selectors.getSelectedCity(state),
});

const mapDispatchToProp = {
  onSelectCity: actions.selectCity,
};

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(SelectCity);
