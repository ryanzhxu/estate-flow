import axios from 'axios';
import SERVER_BASE_URL from '../config';

const getTotalRent = async(propertyIds) => {
    try {
        const res = await axios.post(`${SERVER_BASE_URL}/profit`, propertyIds)
        return res.data;
    } catch(e) {
        console.error(e);
        throw new Error(e.response.data.error);
    }
}

const service = {
    getTotalRent
}

export default service;