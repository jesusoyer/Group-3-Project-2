const router = require('express').Router();
const User = require('../models/User')


router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll({});
      console.log(userData)
      // res.status(200).json(userData);
    
      const exam = userData.map((userData) =>
      userData.get({ plain: true })
    );
   
       

    res.render('homepage', {
      exam, 
      
    });   
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //   res.redirect('/profile');
    //   return;
    // }
  
    res.render('login');
  });


module.exports = router;