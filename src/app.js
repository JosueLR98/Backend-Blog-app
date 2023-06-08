const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
//routes
const authRouter = require('./routes/auth.routes');
const userRouter = require('./routes/users.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//!Rutas
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
module.exports = app;
