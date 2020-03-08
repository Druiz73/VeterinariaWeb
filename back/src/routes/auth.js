import express from 'express';
import { verify } from 'crypto';
import verifyToken from '../middleware/middleware';
import config from '../middleware/config';
import jwt from 'jsonwebtoken';

var router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'welcome to the API AUTH' 
    });
});

router.post('/login', (req, res) => {
    const user = {
        id: 1,
        username: 'brad',
        email: 'brad@gmail.com'
    }
    const token = jwt.sign({ user }, config.key, { expiresIn: '12h' });
    res.header('auth', token).send({ token })
});

export default router;