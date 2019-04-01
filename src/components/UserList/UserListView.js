import React from 'react';

import styles from './UserList.module.css';

const List = ({
  users = [],
  selectedCity = null,
  sorted = { name: 0, job: 0, email: 0, phone: 0, city: 0 },
  sortedName,
  sortedJob,
  sortedEmail,
  sortedPhone,
  sortedCity,
}) => (
  <table className={styles.table}>
    <thead className={styles.thead}>
      <tr>
        <th
          className={
            (sorted.name === 1 && styles.arrowUp) ||
            (sorted.name === -1 && styles.arrowDown)
          }
          onClick={sortedName}
        >
          Name
        </th>
        <th
          className={
            (sorted.job === 1 && styles.arrowUp) ||
            (sorted.job === -1 && styles.arrowDown)
          }
          onClick={sortedJob}
        >
          Job
        </th>
        <th
          className={
            (sorted.email === 1 && styles.arrowUp) ||
            (sorted.email === -1 && styles.arrowDown)
          }
          onClick={sortedEmail}
        >
          Email
        </th>
        <th
          className={
            (sorted.phone === 1 && styles.arrowUp) ||
            (sorted.phone === -1 && styles.arrowDown)
          }
          onClick={sortedPhone}
        >
          Phone
        </th>
        {!selectedCity && (
          <th
            className={
              (sorted.city === 1 && styles.arrowUp) ||
              (sorted.city === -1 && styles.arrowDown)
            }
            onClick={sortedCity}
          >
            City
          </th>
        )}
      </tr>
    </thead>
    <tbody className={styles.tbody}>
      {users.map(({ id, name, job, email, phone, city }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{job}</td>
          <td>{email}</td>
          <td>{phone}</td>
          {!selectedCity && <td>{city}</td>}
        </tr>
      ))}
    </tbody>
  </table>
);

export default List;
