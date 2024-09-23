"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = sendMessage;
exports.sendMessages = sendMessages;
exports.getReports = getReports;
exports.getLogs = getLogs;
exports.getBalance = getBalance;
const client_1 = __importDefault(require("./client"));
function sendMessage(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        if (process.env.NEXTSMS_FROM) {
            payload.from = process.env.NEXTSMS_FROM;
        }
        const { data } = yield client_1.default.post('/text/single', payload);
        return data;
    });
}
function sendMessages(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        if (process.env.NEXTSMS_FROM) {
            payload.messages.forEach((message) => {
                message.from = process.env.NEXTSMS_FROM;
            });
        }
        const { data } = yield client_1.default.post('/text/multi', payload);
        return data;
    });
}
function getReports(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield client_1.default.get('/reports', payload);
        return data;
    });
}
function getLogs(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield client_1.default.get('/logs', payload);
        return data;
    });
}
function getBalance() {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield client_1.default.get('/balance');
        return data;
    });
}
