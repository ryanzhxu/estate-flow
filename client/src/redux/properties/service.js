const partialUrl = '10.10.9.147';

const addProperty = async (property) => {
  const resp = await fetch(`http://${partialUrl}:3001/properties`, {
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
  const resp = await fetch(`http://${partialUrl}:3001/properties`, {
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

const deleteProperty = async (id) => {
  const resp = await fetch(`http://${partialUrl}:3001/properties/${id}`, {
    method: 'DELETE',
  });

  const data = await resp.json();
  if (!resp.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }

  return data;
};

const getProperties = async () => {
  const resp = await fetch(`http://${partialUrl}:3001/properties`, {
    method: 'GET',
  });

  return resp.json();
};

const getProperty = async (id) => {
  const resp = await fetch(`http://${partialUrl}:3001/properties/${id}`, {
    method: 'GET',
  });

  const data = await resp.json();

  if (!resp.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }

  return data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addProperty,
  updateProperty,
  deleteProperty,
  getProperties,
  getProperty,
};
