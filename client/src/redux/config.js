const SERVER_ADDRESS = process.env.SERVER_ADDRESS || 'localhost';
const SERVER_PORT = process.env.REACT_APP_SERVER_PORT || '3001';

const SERVER_BASE_URL =
  process.env.NODE_ENV === 'production' ? process.env.REACT_APP_SERVER_URL : `http://${'10.33.46.214'}:${SERVER_PORT}`;

export default SERVER_BASE_URL;
