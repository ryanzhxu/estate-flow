import axios from 'axios';
import SERVER_BASE_URL from '../config';

const addTenant = async (tenant) => {
  try {
    const res = await axios.post(`${SERVER_BASE_URL}/tenants`, tenant)
    return res.data;
  } catch(e) {
    console.error(e);
    throw new Error(e.message);
  }
};

const updateTenant = async (tenant) => {
  try {
    const res = await axios.put(`${SERVER_BASE_URL}/tenants/${tenant._id}`, tenant);
    return res.data;
  } catch(e) {
    console.error(e);
    throw new Error(e.message);
  }
};

const deleteTenant = async (id) => {
  console.log('delete id type is ' + typeof id);
  console.log('delete id is: ' + id);
  const resp = await fetch(`${SERVER_BASE_URL}/tenants/${id}`, {
    method: 'DELETE',
  });
  const data = await resp.json();
  if (!resp.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  return data;
};

const getTenants = async () => {
  const resp = await fetch(`${SERVER_BASE_URL}/tenants`, {
    method: 'GET',
  });

  return resp.json();
};

const getSingleTenant = async (id) => {
  try {
    const resp = await axios.get(`${SERVER_BASE_URL}/tenants/${id}`);
    return resp.data;
  } catch (e) {
    console.error(e);
    throw new Error(e.response.data.error);
  }
};

const getTenantsFromProperty = async (propertyId) => {
  try {
    const resp = await axios(`${SERVER_BASE_URL}/properties/${propertyId}/tenants`);
    return resp.data;
  } catch (e) {
    console.error(e);
    throw new Error(e.response.data.error);
  }
};

const tenantService = {
  addTenant,
  updateTenant,
  deleteTenant,
  getTenants,
  getSingleTenant,
  getTenantsFromProperty,
};

export default tenantService;
