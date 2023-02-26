const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [
          {
            model: Comment,
            attributes: ['content', 'posted on'],
          },
          {
            model: User,
            attributes: ['username'],
          },
        ],
        });
  
      const posts = postData.map((post) => post.get({ plain: true }));
  
      // Send over the 'loggedIn' session variable to the 'homepage' template
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});


router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
});
  
router.put('/posts/:id', withAuth, async (req, res) => {
    try {
        const newPostData = await Post.update({
            where:{
                ...req.body,
                user_id: req.session.user_id,
            },
        });

        res.status(200).json(newPostData);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.delete('/posts/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
  module.exports = router;
  