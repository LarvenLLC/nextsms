require('dotenv').config();
const axios = require('axios');

const environment = process.env.NEXTSMS_ENV === 'TEST' ? '/test' : '';
const usernamePasswordBuffer = Buffer.from(process.env.NEXTSMS_USERNAME + ':' + process.env.NEXTSMS_PASSWORD);
const base64data = usernamePasswordBuffer.toString('base64');

const client = axios.create({
  baseURL: (process.env.NEXTSMS_BASE_URL || 'https://messaging-service.co.tz/api/sms/v1') + environment,
  maxBodyLength: Infinity,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${base64data}`,
  }
});

export default client;