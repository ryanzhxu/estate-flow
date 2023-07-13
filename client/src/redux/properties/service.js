const partialUrl = 'localhost';

const addProperty = async (property) => {
    const resp = await fetch(`http://${partialUrl}:3001/properties`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(property)
    });

    const data = await resp.json();

    if (!resp.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
}

const updateProperty = async (property) => {
    const resp = await fetch(`http://${partialUrl}:3001/properties`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(property),
    });

    const data = await resp.json();

    if (!resp.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
}

const deleteProperty = async (_id) => {
    const resp = await fetch(`http://${partialUrl}:3001/properties/${_id}`, {
        method: 'DELETE',
    });

    const data = await resp.json();
    if (!resp.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
}

const getProperties = async () => {
    const resp = await fetch(`http://${partialUrl}:3001/properties`, {
        method: 'GET'
    });

    return resp.json();
};

const getProperty = async (_id) => {
    const resp = await fetch(`http://${partialUrl}:3001/properties/${_id}`, {
        method: 'GET',
    });

    return resp.json();
};

const propertyService = {
    addProperty,
    updateProperty,
    deleteProperty,
    getProperties,
    getProperty,
};

export default propertyService;