require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
const SECRET_SESSION = process.env.SECRET_SESSION;
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const methodOverride = require('method-override')
const { default: axios } = require('axios');
const { application } = require('express');


app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.use(session({
  secret: SECRET_SESSION,    
  resave: false,            
  saveUninitialized: true    
}));

app.use(flash());     

app.use(passport.initialize());    
app.use(passport.session());        

app.use((req, res, next) => {
  console.log(res.locals);
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});


// INDEX
app.get('/', isLoggedIn, (req, res) => {
  res.render('index');
});

// ROUTES
app.use('/auth', require('./controllers/auth'));
app.use('/results', isLoggedIn, require('./controllers/results'));
app.use('/profile', isLoggedIn, require('./controllers/profile'));
app.use('/404', require('./controllers/results'));

// 404
app.use((req,res) => {
  res.status(404).render('404');
});

// SERVER
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;
