import express from 'express';
const app = express();
import data from './data';

app.get("/api/products",(req, res) => {

	res.send(data.products);
})

app.listen(5000, ()=> { console.log('Server Started at 5000')})
