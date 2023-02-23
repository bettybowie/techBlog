const { User } = require('../models');

const userData = [
    {
        username: 'John Doe',
        password: '1234567',
    },
    {
        username: 'Jane Doe',
        password: 'abcdefg',
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;