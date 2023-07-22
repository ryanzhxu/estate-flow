const SERVER_PORT = process.env.REACT_APP_SERVER_PORT || "3001";

const SERVER_BASE_URL = process.env.NODE_ENV === "production" ?
    process.env.REACT_APP_SERVER_URL : `http://localhost:${SERVER_PORT}`;

export default SERVER_BASE_URL;