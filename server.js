const express = require('express'),
  dotenv = require('dotenv').config(),
  colors = require('colors'),
  cors = require('cors'),
  connectDB = require('./config/db'),
  { errorHandler } = require('./middleWare/errorMiddleWare'),
  port = process.env.PORT || 5000;
connectDB();
  const  app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/goals', require('./routes/goalRoutes'));
app.use('/users', require('./routes/userRoutes'));

app.use(errorHandler)
app.listen(port,()=>console.log(`Magic happens On port ${port}`))
