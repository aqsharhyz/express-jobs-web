const axios = require('axios');

// adding 5 users to the database
const users = [
  {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    password: 'q1w2e3r4',
    location: 'my city',
  },
  {
    name: 'Jane Doe',
    email: 'janedoe@gmail.com',
    password: 'a1s2d3f4',
    location: 'padalarang',
  },
  {
    name: 'John Smith',
    email: 'johnsmith12@gmail.com',
    password: 'z1x2c3v4',
    location: 'bandung',
  },
  {
    name: 'Jane Smith',
    email: 'janes@gmail.com',
    password: 'qazwsxedc',
    location: 'jakarta',
  },
];

// post to localhost:3000/signup/ to create a new user
// for (user of users) {
//   axios
//     .post('http://localhost:3000/signup/', user)
//     .then(response => {
//       console.log(response);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }

// adding 5 jobs to the user
jobs = [
  {
    company: 'PT. ABC',
    position: 'Software Engineer',
    status: 'interviewed',
    jobType: 'full-time',
    location: 'Jakarta',
  },
  {
    company: 'PT. DEF',
    position: 'Software Analyst',
    status: 'declined',
    jobType: 'internship',
    location: 'Bandung',
  },
  {
    company: 'PT. GHI',
    position: 'Software Developer',
    status: 'pending',
    jobType: 'part-time',
    location: 'Jakarta',
  },
  {
    company: 'PT. JKL',
    position: 'Software Engineer',
    status: 'interviewed',
    jobType: 'Full Time',
    location: 'Jakarta',
  },
  {
    company: 'PT. MNO',
    position: 'Software Engineer',
    status: 'pending',
    jobType: 'full-time',
    location: 'Jakarta',
  },
  {},
];

//convert to json
const job = JSON.stringify(jobs);
//save to jobs.json
const fs = require('fs');
fs.writeFileSync('jobs.json', job, 'utf8', err => {
  if (err) {
    console.log(err);
  }
});
