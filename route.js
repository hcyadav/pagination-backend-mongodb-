
import express from "express";
//import axios from "axios";

import { getUsers, addUser, getUserById, editUser , deleteUser} from "../Controller/user-controller.js";
const route = express.Router();

route.get('/', getUsers);
route.post('/add', addUser);
route.get('/:id', getUserById);
route.put('/:id',editUser);
route.delete("/:id", deleteUser);





export default route;

