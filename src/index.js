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
  // Replace with logic to fetch and pass project data
  const projectsData = [
    { title: 'Project 1', description: 'Description 1', image: 'project1.jpg' },
    // Add more projects
  ];
  res.render('pages/projects', { projects: projectsData });
});

app.get('/services', (req, res) => {
  // Replace with your services data
  const servicesData = ['Service 1', 'Service 2', 'Service 3'];
  res.render('pages/services', { services: servicesData });
});

app.get('/contact', (req, res) => {
  res.render('pages/contact');
});

app.listen(5050);