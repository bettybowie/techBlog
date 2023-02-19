const { Post } = require('../models');

const postData =  [
    {
        title: 'Sample Post 1',
        content: 'This is sample content for sample post 1.',
        posted_on: '01/25/2023',
        user_id: '1',
    },
    {
        title: 'Sample Post 2',
        content: 'This is sample content for sample post 2.',
        posted_on: '01/26/2023',
        user_id: '2',
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;