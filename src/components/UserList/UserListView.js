import React from 'react';

import styles from './UserList.module.css';

const List = ({ users = [], qs = true }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Email</th>
        <th>Phone</th>
        {qs && <th>City</th>}
      </tr>
    </thead>
    <tbody>
      {users.map(({ id, name, job, email, phone, city }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{job}</td>
          <td>{email}</td>
          <td>{phone}</td>
          {qs && <td>{city}</td>}
        </tr>
      ))}
    </tbody>
  </table>
);

export default List;
