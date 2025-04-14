const express = require('express');
const mongoose = require('mongoose');
const http  = require('http');
const app = require('./app');


const server = http.createServer(app);

server.listen(8000, ()=>{
    console.log(`Server is running on port 8000`);
    console.log(`http://localhost:8000`);
});
