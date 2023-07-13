const getWorkers = async () => {
    const response = await fetch('http://localhost:3001/workers', {
        method: 'GET'
    });
    return response.json();
};

const addWorker = async ({name, email, phone, address, hRate, trades, pCode, imageURL}) => {
    const response = await fetch('http://localhost:3001/workers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, phone, address, hRate, trades, pCode, imageURL})
    });
    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }
    return data;
};

const deleteWorker = async ({id}) => {
    const response = await fetch("http://localhost:3001/workers", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"id":id})
    });
    const data = await response.json();
    if (!response.ok) {
        const error = data?.message;
        throw new Error (error);
    }
    return data;
};

const updateWorker = async ({id, name, email, phone, address, hRate, trades, pCode, imageURL}) => {
    const response = await fetch(`http://localhost:3001/workers/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, phone, address, hRate, trades, pCode, imageURL})
    });
    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }
    return data;
};

const getWorker = async (id) => {
    const response = await fetch(`http://localhost:3001/workers/${id.id}`, {
        method: 'GET'
    });
    return response.json();
};

const getSortFilter = async ({tradeType, sortOption}) => {
    const response = await fetch(`http://localhost:3001/workers/sort?query=query&Trades=${tradeType}&sort=${sortOption}`, {
        method: 'GET'
    });
    return response.json();
};


export default {
    getWorkers,
    addWorker,
    deleteWorker,
    updateWorker,
    getWorker,
    getSortFilter
};