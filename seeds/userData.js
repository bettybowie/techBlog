const { User } = require('../models');

const userData = [
    {
        name: 'John Doe',
        password: '1234567',
    },
    {
        name: 'Jane Doe',
        password: 'abcdefg',
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;