
import express, {Router} from "express";
import mongoose from "mongoose";
import cors from "cors";
//import bodyParser from "body-parser";

import route from "./route/route.js";


const app = express();
//app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors());

app.use('/users', route);

const port = 8000;
const Url = "mongodb+srv://user:123456789987654321@crud.ntek5.mongodb.net/CRUD?retryWrites=true&w=majority";

mongoose.connect(Url, {useNewUrlparser: true}
    ).then(() => {
        app.listen(port, () => {
            console.log(`server is running successfully on port ${port}`);
        });
    } ).catch(error => {
        console.log('Error:', error.message);
    })
