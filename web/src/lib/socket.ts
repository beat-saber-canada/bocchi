import ioClient from 'socket.io-client';
const ENDPOINT = "http://localhost:3173";

const socket = ioClient(ENDPOINT)
export const io = socket

const taSocket = ioClient("ws://10.0.0.135:2053")
export const taIo = taSocket