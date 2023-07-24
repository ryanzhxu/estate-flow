const SERVER_ADDRESS = process.env.SERVER_ADDRESS || 'localhost';
const SERVER_PORT = process.env.REACT_APP_SERVER_PORT || '3001';

const SERVER_BASE_URL =
  process.env.NODE_ENV ? process.env.REACT_APP_SERVER_URL : `http://${SERVER_ADDRESS}:${SERVER_PORT}`;

export default SERVER_BASE_URL;
