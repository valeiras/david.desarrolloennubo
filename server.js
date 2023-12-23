import app from './app.js';
import { createServer } from 'http';

createServer(app).listen(process.env.PORT);
