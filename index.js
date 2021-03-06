const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
// express doesn't know how to handle cookies, this helps
const passport = require('passport');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const cors = require('cors');
// these are just require statements because we need to link them to the index.js but we don't need to use them in any of the code below
// Remember, the order of the require statements can trip up the code. The user collection needs to be created prior to the passport funtionality so that it can save a new user to the db collection

require('./models/User');
require('./services/passport');

mongoose.Promise = global.Promise;
// we pass the address of the mongo instance we crated on mlab.com. Each project on there will give us a uri. We place it in config to hide from people
mongoose.connect("mongodb://localhost/jugg", {
  useMongoClient: true
})

// if(keys.mongoURI){
//   mongoose.connect(keys.mongoURI)  
// } else {
  // mongoose.connect(keys.mongoLocal)
// }



const app = express();
// all app.use are middlewares that get applied to our app before the route handlers, you can also place them elsewhere if you don't want all these middlewares being used between all routes handlers
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// setting passport to be use in the application
app.use(passport.initialize());
app.use(passport.session());

// here we are able to use our app within the routes by exporting their route function and pluggin our app variable into them
require('./routes/authRoutes')(app);
require('./routes/menuRoutes')(app);
require('./routes/apiRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// whenever heroku runs our application it has the ability to inject envirnoment variables, which is herokus opportunity to send us runtime configs, this variable will run out application through heroku, however to run in dev envirnoment we need a local port (5000 here)
const PORT = process.env.PORT || 5000;
app.listen(PORT);
