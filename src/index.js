import Server from './config/server.js';
import express from 'express';

const server = new Server({ express });
server.listen(8000);
