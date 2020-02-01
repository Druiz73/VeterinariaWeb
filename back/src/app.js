import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

import indexRouter from './routes/index';
import contactRouter from './routes/contact';
import productoRouter from './routes/Productos';
import mercadoPago from './routes/mercado-pago';

mongoose.connect('mongodb://localhost:27017/veterinariaWebDb', { useNewUrlParser: true });

const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit: 50000 }));

app.use('/', indexRouter);
app.use('/contacto', contactRouter);
app.use('/producto', productoRouter);
app.use('/mercado-pago', mercadoPago);

export default app;
