import app from './app.js';
import { createServer } from 'http';

const port = process.env.PORT || 3000;
createServer(app).listen(port);
console.log(port);
