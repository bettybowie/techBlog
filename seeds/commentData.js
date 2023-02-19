const { Comment } = require('../models');

const commentData =  [
    {
        content: 'This is sample comment for sample post 1.',
        posted_on: '01/26/2023',
        post_id: '1',
        user_id: '2',
    },
    {
        content: 'This is sample comment for sample post 2.',
        posted_on: '01/27/2023',
        post_id: '2',
        user_id: '1',
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;