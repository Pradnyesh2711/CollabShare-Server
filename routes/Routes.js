import express from 'express';



import { addUser, getUser } from '../controller/user-controller.js';


// import upload from '../utils/upload.js';

const route = express.Router();

route.post('/add', addUser);



export default route;