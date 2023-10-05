/**
 * File Name: Index.js
 * Student Name: Miten Patel
 * Student Id: 301411557
 * Date: 04 Oct 2023
 */

const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../public'));

// Define routes for each page
app.get('/', (req, res) => {
  res.render('pages/home');
});

app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.get('/projects', (req, res) => {
  res.render('pages/projects');
});

app.get('/services', (req, res) => {
  res.render('pages/services');
});

app.get('/contact', (req, res) => {
  res.render('pages/contact');
});

app.listen(5050);
console.log('Server is running on Port 5050');