import SERVER_BASE_URL from '../config';
import axios from 'axios';

const getProperties = async () => {
  const resp = await fetch(`${SERVER_BASE_URL}/properties`, {
    method: 'GET',
  });

  return resp.json();
};

const getProperty = async (_id) => {
  const resp = await fetch(`${SERVER_BASE_URL}/properties/${_id}`, {
    method: 'GET',
  });

  return resp.json();
};

const getPropertiesForDashboard = async () => {
  try {
    const res = await axios.get(`${SERVER_BASE_URL}/properties/dashboard`);
    return res.data;
  } catch (e) {
    console.error(e);
    throw new Error(e.response.data.error);
  }
};

const addProperty = async (property) => {
  try {
    const resp = await axios.post(`${SERVER_BASE_URL}/properties`, property, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    return await resp.data();
  } catch(e) {
    throw new Error(e.data.message);
  }
};

const updateProperty = async (property) => {
  const resp = await fetch(`${SERVER_BASE_URL}/properties`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(property),
  });

  const data = await resp.json();

  if (!resp.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }

  return data;
};

const deleteProperty = async (_id) => {
  const resp = await fetch(`${SERVER_BASE_URL}/properties/${_id}`, {
    method: 'DELETE',
  });

  const data = await resp.json();

  if (!resp.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }

  return data;
};

const propertyService = {
  getProperties,
  getProperty,
  getPropertiesForDashboard,
  addProperty,
  updateProperty,
  deleteProperty,
};

export default propertyService;
