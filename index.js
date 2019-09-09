const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/db').MongoDB;
const app = express();

mongoose.connect(db,{useNewUrlParser: true, useFindAndModify: false})
	.then(console.log('DB connected...'))
	.catch(err=>console.log('DB not connected...',err));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/',require('./routes/routes'));

const PORT = process.env.PORT || 5000;





app.listen(PORT,console.log(`only on port ${PORT}`));