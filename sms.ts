import client from "./client";
import type { LogsPayload, MessagePayload, MessagesPayload, ReportsPayload } from './types';

export async function sendMessage(payload: MessagePayload) {
  if (process.env.NEXTSMS_FROM && !payload?.from) {
    payload.from = process.env.NEXTSMS_FROM;
  }
  const { data } = await client.post('/text/single', payload);
  return data;
}

export async function sendMessages(payload: MessagesPayload) {
  if (process.env.NEXTSMS_FROM) {
    payload.messages.forEach((message) => {
      if (!message?.from) {
        message.from = process.env.NEXTSMS_FROM;
      }
    });
  }
  const { data } = await client.post('/text/multi', payload);
  return data;
}

export async function getReports(payload: ReportsPayload) {
  const { data } = await client.get('/reports', payload);
  return data;
}

export async function getLogs(payload: LogsPayload) {
  const { data } = await client.get('/logs', payload);
  return data;
}

export async function getBalance() {
  const { data } = await client.get('/balance');
  return data;
}