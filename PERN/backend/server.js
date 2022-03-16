const express = require("express")
const cors = require("cors")
const routes = require("./routes");
const app = express()
const port = 3000

import { connectToDB } from './database';

connectToDB();


app.use(cors({
    origin: '*'
}));

app.use(express.json())

app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

app.listen(port, () => {
    console.log('Backend running in port:  ' +  port);
});

app.use("/v1", routes);