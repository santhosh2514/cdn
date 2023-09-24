const http = require('node:http');
const express  = require('express');
const crypto = require('crypto')
const hostname = '127.0.0.1';
const port = 3003;

const app = express()
const users = []

app.get('/newUser', (req, res) => {
    let userName = req.query.username
    let pass = req.query.password
    userName = userName.replace(/[!@#$%^&*]/g, '');
    console.log(userName)
    const salt = crypto.randomBytes(128).toString('base64')
    console.log(salt)
    const hash = crypto.pbkdf2Sync(pass, salt, 10000, 512,'sha512')
    console.log(hash)
    users[userName] = { salt, hash }
    
    res.end('hi')
})

app.get('/auth', (req, res) => {
    let userName = req.query.username || '';
    const password = req.query.password || '';
  
    userName = userName.replace(/[!@#$%^&*]/g, '');
  
    if (!userName || !password || !users[userName]) {
      return res.sendStatus(400);
    }
  
    crypto.pbkdf2(password, users[userName].salt, 10000, 512, 'sha512', (err, hash) => {
        if (users[userName].hash.toString() === hash.toString()) {
          res.sendStatus(200);
        } else {
          res.sendStatus(401);
        }
      });
  });

app.listen(port, () => {
    console.log(`Started listening on port ${port}`)
})

