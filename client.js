"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
const environment = process.env.NEXTSMS_ENV === 'TEST' ? '/test' : '';
const client = axios.create({
    baseURL: process.env.NEXTSMS_BASE_URL + environment,
    maxBodyLength: Infinity,
    auth: {
        username: process.env.NEXTSMS_USERNAME,
        password: process.env.NEXTSMS_PASSWORD,
    },
});
exports.default = client;
