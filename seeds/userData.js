const { User } = require('../models');

const userData = [
    {
        username: 'JohnDoe',
        password: '1234567',
    },
    {
        username: 'JaneDoe',
        password: 'abcdefg',
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;