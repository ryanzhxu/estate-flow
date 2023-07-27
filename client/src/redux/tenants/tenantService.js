import axios from 'axios';
import SERVER_BASE_URL from '../config';

const addTenant = async (tenant) => {
  const resp = await fetch(`${SERVER_BASE_URL}/properties/${tenant.propertyId}/tenant`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tenant),
  });

  const data = await resp.json();

  if (!resp.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }

  return data;
};

const updateTenant = async (tenant) => {
  const resp = await fetch(`${SERVER_BASE_URL}/tenants`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tenant),
  });

  const data = await resp.json();

  if (!resp.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }

  return data;
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

const getTenantsWithDuesByDate = async (date) => {
  const resp = await fetch(`${SERVER_BASE_URL}/tenants/dues/${date}`, {
    method: 'GET',
  });

  return resp.json();
};

const getDueDaysForMonth = async (yearMonth) => {
  const [year, month] = yearMonth.split('-');
  const resp = await fetch(`${SERVER_BASE_URL}/tenants/dues/${year}/${month}`, {
    method: 'GET',
  });

  return resp.json();
};

const tenantService = {
  addTenant,
  updateTenant,
  deleteTenant,
  getTenants,
  getSingleTenant,
  getTenantsFromProperty,
  getTenantsWithDuesByDate,
  getDueDaysForMonth,
};

export default tenantService;
