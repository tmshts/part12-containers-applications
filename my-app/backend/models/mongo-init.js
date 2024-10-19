db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
});

db.createCollection('projects');

db.projects.insert({
  ID: 1,
  title: 'Blog App',
  source: 'https://github.com/tmshts/fullstackopen_2/tree/main/part7/bloglist',
  introduction: 'The Blog App is an app where are depicted differentblogs from diverse authors. An user must register in order to be able to add blogs. After successful log-in into an app, each user is able to add and delete a post. Any user can then like and comment every post.',
  about: 'This project is a kind of capstone for the course introduction to modern web application development with JavaScript which is provided by University of Helsinki.',
  implementation: 'The backend is built with JavaScript, Node.js, Express, mongoDB, REST API, and tested with jest. The frontend is built with React, Redux, React Router and tested with jest and cypress.',
  tools_frontend: [
    'React',
    'vite',
    'Redux',
    'React Router',
    'axios',
    'styled-components',
    'bootstrap',
    'jest',
    'cypress',
    'deep-freeze',
    'prettier'
  ],
  tools_backend: [
    'Node.js',
    'JavaScript',
    'Express',
    'mongoose',
    'REST API',
    'nodemon',
    'cors',
    'bcrypt',
    'dotenv',
    'express-async-errors',
    'jsonwebtoken',
    'lodash',
    'prettier',
    'jest',
    'supertest'
    ],
    url: 'https://fullstackopen.com/en',
    likes: 2,
    // comments: [ ]
});

db.createCollection('education');

db.education.insert({
  ID: 1,
  name: 'Friedrich-Alexander-University of Erlangen-Nürnberg',
  city: 'Erlangen, Nürnberg',
  country: 'Germany',
  grade: 'Master of Science in International Information Systems (in English and German)',
  timeframe: 'Oct 2019 – Sept 2024',
  courses: [
  'Introduction to computer science (C, Python, JavaScript, HTML, CSS, Flask)',
  'Conceptual modelling (SQL)',
  'Introduction to machine learning (Python, Visual Studio Code)',
  'Foundations of Linked Data (SPARQL, RDF, OWL, Python)',
  'Software development in large projects',
  'Analysis and design of object-oriented software systems with the UML'
  ],
});


db.createCollection('jobs');

db.jobs.insert({
  ID: 1,
  company: 'Basys Anwender- und Systemsoftware GmbH',
  city: 'Erlangen',
  country: 'Germany',
  position: 'Software developer in Automotive industry (remotely/hybrid)',
  timeframe: 'Jan 2022 – July 2023',
  tasks: [
  'modelling and describing use cases, sequence and other diagrams for documentation of AUTOSAR'
  ],
  aptitudes: 'Enterprise Architect (Sparx EA), UML, Visual Studio Code, LaTeX, Rake, TortoiseSVN',
});