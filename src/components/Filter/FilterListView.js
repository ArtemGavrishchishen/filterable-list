import React from 'react';

const FilterListView = ({
  name,
  job,
  email,
  phone,
  filterName,
  filterJob,
  filterEmail,
  filterPhone,
}) => (
  <ul>
    <li>
      <input
        type="text"
        value={name}
        onChange={e => filterName(e.target.value)}
        placeholder="Name"
      />
    </li>
    <li>
      <input
        type="text"
        value={job}
        onChange={e => filterJob(e.target.value)}
        placeholder="Job"
      />
    </li>
    <li>
      <input
        type="text"
        value={email}
        onChange={e => filterEmail(e.target.value)}
        placeholder="Email"
      />
    </li>
    <li>
      <input
        type="text"
        value={phone}
        onChange={e => filterPhone(e.target.value)}
        placeholder="Phone"
      />
    </li>
  </ul>
);

export default FilterListView;
