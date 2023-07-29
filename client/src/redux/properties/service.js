import SERVER_BASE_URL from '../config';

const getProperties = async () => {
  const resp = await fetch(`${SERVER_BASE_URL}/properties`, {
    method: 'GET',
  });

  console.log('uri: ', `${SERVER_BASE_URL}/properties`);

  console.log('resp: ', resp);

  return resp.json();
};

const getProperty = async (_id) => {
  const resp = await fetch(`${SERVER_BASE_URL}/properties/${_id}`, {
    method: 'GET',
  });

  return resp.json();
};

const addProperty = async (property) => {
  const resp = await fetch(`${SERVER_BASE_URL}/properties`, {
    method: 'POST',
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
  addProperty,
  updateProperty,
  deleteProperty,
};

export default propertyService;
