const faker = require('faker');
const fs = require('fs');
const path = require('path');

const citys = [
  'Los Angeles',
  'Washington',
  'New York',
  'Salt Lake City',
  'San Diego',
];

const generateUsers = amount => {
  const users = [];

  for (let i = 0; i < amount; i += 1) {
    const user = {
      id: faker.random.uuid(),
      name: faker.name.findName(),
      job: faker.name.jobTitle(),
      email: faker.internet.email(),
      city: faker.random.arrayElement(citys),
      phone: faker.phone.phoneNumber(),
    };

    users.push(user);
  }

  const data = {
    users,
  };

  return data;
};

fs.writeFileSync(
  path.resolve(__dirname, './db.json'),
  JSON.stringify(generateUsers(100)),
);
