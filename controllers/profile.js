let express = require('express')
let db = require('../models')
let router = express.Router()
const { default: axios } = require('axios');



router.get('/', async (req, res) => {

  let animes = await db.anime.findAll();

  animes = animes.map(a => a.toJSON());
  console.log(animes);
  res.render('profile/index', { animes: animes });
});

router.get('/edit', (req, res) => {
  res.render('profile/edit');
});

router.post('/new', async (req, res) => {

  console.log('********* /new', req.body);
  
  const newAnime = await db.anime.create({
    title: req.body.title,
    episodes: req.body.episodes,
    image_url: req.body.image_url,
    userId: parseInt(req.body.userId)
  });
  console.log(newAnime.toJSON());
  
  res.redirect('/profile');
})

router.get('/:id', (req, res) => {
  db.anime.findOne({
    where: { id: req.params.id },
    include: [db.user, db.comment]
  })
  .then((anime) => {
    if(!anime) throw Error()
    res.render('profile/show', { anime: anime })
  })
  .catch((error) => {
    res.status(400).render('404');
  })
});

router.put('/:id', async (req, res) => {
  try {
      const foundUser = await db.user.findOne({ where: { email: req.body.email }});
      console.log(foundUser);
      if (!foundUser) {
        const usersUpdated = await db.user.update({
          email: req.body.email,
          name: req.body.name
        }, {
          where: {
            id: req.params.id
          }
        });

        res.redirect('/profile');
      } else if (foundUser.email && foundUser.id !== req.user.id) {
        req.flash('error', 'Email already exists. Please try again.');
        res.redirect('/profile');
      } else {
        const usersUpdated = await db.user.update({
          email: req.body.email,
          name: req.body.name
        }, {
          where: {
            id: req.params.id
          }
        });

        console.log('********** PUT ROUTE *************');
        console.log('Users updated', usersUpdated);
        console.log('**************************************************');
  
        res.redirect('/profile');
      }
  } catch (error) {
    console.log('*********************ERROR***********************');
    console.log(error);
    console.log('**************************************************');
    res.render('profile/edit');
  }
});

router.post('/:id', (req, res) => {
  const createdDate = new Date().toISOString();
  db.anime.findOne({
    where: { id: req.params.id },
    include: [db.user, db.comment]
  })
  .then((anime) => {
    if (!anime) throw Error()
    db.comment.create({
      animeId: parseInt(req.params.id),
      content: req.body.content,
      createdAt: createdDate,
      updatedAt: createdDate
    }).then(comment => {
      res.redirect(`${req.params.id}`);
    })
  })
  .catch((error) => {
    console.log(error)
    res.status(400).render('main/404')
  })
})


router.delete('/:id', async (req, res) => {

  let animesDeleted= await db.anime.destroy({
    where: { id: req.params.id }
  });
  console.log(`Amount of animes deleted: ${animesDeleted}`);
  res.redirect('/profile');
})

module.exports = router;