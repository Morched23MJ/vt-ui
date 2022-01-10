const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"))

app.get('/', (req, res) => res.render('pages/misc/about'));

// ADS routes
app.get('/ads', (req, res) => res.render('pages/ads/list'));

// AUTH routes
app.get('/login', (req, res) => res.render('pages/auth/login'));
app.get('/signup', (req, res) => res.render('pages/auth/signup'));
app.get('/forgot-password', (req, res) => res.render('pages/auth/forgot-password'));
app.get('/resend-link', (req, res) => res.render('pages/auth/resend-link'));
app.get('/reset-password', (req, res) => res.render('pages/auth/reset-password'));

// ADMIN routes
app.get('/admin/users', (req, res) => res.render('pages/admin/users'));
app.get('/admin/users/:id', (req, res) => res.render('pages/admin/user'));

const port = process.env.PORT || 3100;

app.listen(port);