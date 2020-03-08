import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import turnosRouter from './routes/turnos';
import consultavetRouter from './routes/consultavet';
import indexRouter from './routes/index';
import contactRouter from './routes/contact';
import productoRouter from './routes/Productos';
import mercadoPago from './routes/mercado-pago';
import categoriasRouter from './routes/categorias';
import authRouter from './routes/auth';
import { verify } from 'crypto';
import userRouter from './routes/user';


import saleRouter from './routes/Sales';

mongoose.connect('mongodb://localhost:27017/veterinariaWebDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

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
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.use('/', indexRouter);
app.use('/contact', contactRouter);
app.use('/producto', productoRouter);
app.use('/mercado-pago', mercadoPago);
app.use('/categorias', categoriasRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/sales', saleRouter);
app.use('/turnos', turnosRouter);
app.use('/consultavet', consultavetRouter);
export default app;
