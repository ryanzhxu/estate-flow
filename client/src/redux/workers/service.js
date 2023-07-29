import SERVER_BASE_URL from '../config';

const getWorkers = async () => {
  const response = await fetch(`${SERVER_BASE_URL}/workers`, {
    method: 'GET',
  });

  return response.json();
};

const getWorker = async (_id) => {
  const response = await fetch(`${SERVER_BASE_URL}/workers/${_id}`, {
    method: 'GET',
  });

  return response.json();
};

const addWorker = async (worker) => {
  const response = await fetch(`${SERVER_BASE_URL}/workers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(worker),
  });

  const data = await response.json();

  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }

  return data;
};

const updateWorker = async (worker) => {
  const response = await fetch(`${SERVER_BASE_URL}/workers`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(worker),
  });

  const data = await response.json();

  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }

  return data;
};

const deleteWorker = async (_id) => {
  const response = await fetch(`${SERVER_BASE_URL}/workers/${_id}`, {
    method: 'DELETE',
  });

  const data = await response.json();

  if (!response.ok) {
    const error = data?.message;
    throw new Error(error);
  }

  return data;
};

const getSortFilter = async ({ tradeType, sortOption }) => {
  const response = await fetch(`${SERVER_BASE_URL}/workers/sort?query=query&Trades=${tradeType}&sort=${sortOption}`, {
    method: 'GET',
  });
  return response.json();
};

const workerService = {
  getWorkers,
  getWorker,
  addWorker,
  updateWorker,
  deleteWorker,
  getSortFilter,
};

export default workerService;
