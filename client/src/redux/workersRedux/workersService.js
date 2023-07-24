import SERVER_BASE_URL from "../config";

const getWorkers = async () => {
  const response = await fetch(`${SERVER_BASE_URL}/workers`, {
    method: 'GET',
    });
    return response.json();
};

const addWorker = async ({name, email, phone, address, hRate, trades, pCode, imageUrlInput}) => {
    const response = await fetch('${SERVER_BASE_URL}/workers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, phone, address, hRate, trades, pCode, imageUrlInput})
    });
    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }
    return data;
};

const deleteWorker = async ({ _id }) => {
  const response = await fetch('${SERVER_BASE_URL}/workers', {
    method: 'DELETE',
    body: JSON.stringify({ _id: _id }),
  });
  
  const data = await response.json();
  if (!response.ok) {
    const error = data?.message;
    throw new Error(error);
  }
  return data;
};

const updateWorker = async ({ _id, name, email, phone, address, hRate, trades, pCode, imageURL }) => {
  const response = await fetch(`${SERVER_BASE_URL}/workers/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, phone, address, hRate, trades, pCode, imageURL }),
  });
  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  return data;
};

const getWorker = async (_id) => {
    const response = await fetch(`${SERVER_BASE_URL}/workers/${_id._id}`, {
        method: 'GET'
    });
    return response.json();
};

const getSortFilter = async ({tradeType, sortOption}) => {
    const response = await fetch(`${SERVER_BASE_URL}/workers/sort?query=query&Trades=${tradeType}&sort=${sortOption}`, {
        method: 'GET'
    });
    return response.json();
};

const workerService = {
    getWorkers,
    addWorker,
    deleteWorker,
    updateWorker,
    getWorker,
    getSortFilter
}

export default workerService
