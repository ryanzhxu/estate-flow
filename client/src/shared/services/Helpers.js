export const getSelectOptions = (fieldOptions) => {
  return Object.entries(fieldOptions).map(([value, label]) => ({
    value,
    label,
  }));
};

export const clearNestedObjectValues = (obj) => {
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      clearNestedObjectValues(obj[i]);
    }
  } else if (typeof obj === 'object' && obj !== null) {
    for (let key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        clearNestedObjectValues(obj[key]);
      } else {
        obj[key] = '';
      }
    }
  }
};

export const areReqFieldsFilled = (object, requiredFields) => {
  for (const field of requiredFields) {
    if (!object.hasOwnProperty(field) || !object[field]) {
      return false;
    }
  }
  return true;
};

export const saveValueToObject = (object, fieldName, value) => {
  if (!object || !fieldName || !value) {
    return;
  }

  if (object.hasOwnProperty(fieldName)) {
    object[fieldName] = value;
  }

  for (const key in object) {
    if (typeof object[key] === 'object') {
      saveValueToObject(object[key], fieldName, value);
    }
  }
};

export const getSelectedIndex = (selections, value) => {
  if (!value || value === '') {
    return '';
  }

  const keys = Object.keys(selections);
  const keyIndex = keys.indexOf(value);
  if (keyIndex > -1) {
    return keyIndex;
  }

  const valueIndex = Object.values(selections).indexOf(value);
  if (valueIndex > -1) {
    return valueIndex;
  }

  return '';
};

export const getCapitalized = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getConvertedDate = (dateString) => {
  const dateObject = new Date(dateString);

  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();

  const formattedMonth = month.toString().padStart(2, '0');
  const formattedDay = day.toString().padStart(2, '0');

  const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;

  return formattedDate;
};

export const dayHasDue = (formattedDueDays, unformattedDay) => {
  const day = getConvertedDate(unformattedDay).slice(-2);
  return formattedDueDays.includes(day);
};
