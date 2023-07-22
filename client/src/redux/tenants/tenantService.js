import axios from 'axios';

const port = '3001';
const partialUrl = `http://172.31.0.1:${port}`;

const addTenant = async (tenant) => {
  const resp = await fetch(`${partialUrl}/properties/${tenant.propertyId}/tenant`, {
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
  const resp = await fetch(`${partialUrl}/tenants/${tenant._id}`, {
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
  const resp = await fetch(`${partialUrl}/tenants/${id}`, {
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
  const resp = await fetch(`${partialUrl}/tenants`, {
    method: 'GET',
  });

  return resp.json();
};

const getSingleTenant = async (id) => {
  try {
    const resp = await axios.get(`${partialUrl}/tenants/${id}`);
    return resp.data;
  } catch (e) {
    console.error(e);
    throw new Error(e.response.data.error);
  }
};

const getTenantsFromProperty = async (propertyId) => {
  try {
    const resp = await axios(`${partialUrl}/properties/${propertyId}/tenants`);
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
