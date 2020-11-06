const express = require('express');
const morgan = require('morgan');
const app = express();
const session = require('express-session');
const PORT = process.env.PORT || 3001;
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./db'); // loads our connection to the mongo database
const routes = require("./routes");
const passport = require('./passport');

// DOTENV file for hiding sensitive data
// require('dotenv').config();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: process.env.APP_SECRET || 'mongodb+srv://user:password1@ds031965@cluster0.6ryi6.mongodb.net/heroku_q4pg867x?retryWrites=true&w=majority',
  store: new MongoStore({ mongooseConnection: dbConnection }),
  resave: false,
  saveUninitialized: false
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}

app.use(routes)

app.listen(PORT, (req, res) => {
  console.log(`App is listening on PORT: http://localhost:${PORT}`);
});
