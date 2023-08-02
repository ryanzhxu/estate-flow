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
  const formattedDate = dateObject.toISOString().split('T')[0];
  
  return formattedDate;
};

export const dayHasDue = (formattedDueDays, unformattedDay) => {
  const day = getConvertedDate(unformattedDay).slice(-2);
  return formattedDueDays.includes(day);
};

export const selectedDate = (date) => {
  const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthIndex = date.getMonth();
  const month = monthList[monthIndex];
  const day = date.getDate();
  const selectedDate = month + ' ' + day;
  return selectedDate;
};

export const getFormattedPhoneNum = (number) => {
  const cleanedNumber = number.replace(/\D/g, '');

  if (cleanedNumber.length === 10) {
    return `(${cleanedNumber.slice(0, 3)}) ${cleanedNumber.slice(3, 6)}-${cleanedNumber.slice(6)}`;
  }

  return number;
};

export const getStandardizedProperty = (propertyObj) => {
  const { streetAddress, city, province, postalCode } = propertyObj;

  const address = {
    streetAddress,
    city,
    province,
    postalCode,
  };

  const updatedPropertyObj = { ...propertyObj, address };

  delete updatedPropertyObj.streetAddress;
  delete updatedPropertyObj.city;
  delete updatedPropertyObj.province;
  delete updatedPropertyObj.postalCode;

  return updatedPropertyObj;
};

export const getStandardizedTenant = (tenant) => {
  const { startDate, endDate, leaseType } = tenant;

  const lease = {
    startDate,
    endDate,
    leaseType,
  };

  const updatedTenantObj = { ...tenant, lease };

  delete updatedTenantObj.startDate;
  delete updatedTenantObj.endDate;
  delete updatedTenantObj.leaseType;

  return updatedTenantObj;
};

export const getMappedEditObject = (object) => {
  const editObject = {};

  for (const field in object) {
    if (field === '_id' || field === '__v' || field === 'propertyId' || field === 'paymentHistory') {
      continue;
    }

    if (field === 'address' || field === 'lease') {
      for (const nestedField in object[field]) {
        if (nestedField === 'fees') {
          continue;
        }

        editObject[nestedField] = object[field][nestedField];
      }
    } else {
      editObject[field] = object[field] || '';
    }
  }

  return editObject;
};

export const getDateDifference = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const yearDiff = end.getFullYear() - start.getFullYear();
  const monthDiff = end.getMonth() - start.getMonth();
  const dayDiff = end.getDate() - start.getDate();

  let yearDiffAbs = Math.abs(yearDiff);
  let monthDiffAbs = Math.abs(monthDiff);
  let dayDiffAbs = Math.abs(dayDiff);

  const isEndDateBeforeStartDate = end < start;

  if (isEndDateBeforeStartDate) {
    yearDiffAbs = -yearDiffAbs;
    monthDiffAbs = -monthDiffAbs;
    dayDiffAbs = -dayDiffAbs;
  }

  return {
    years: yearDiffAbs,
    months: monthDiffAbs,
    days: dayDiffAbs,
    isEndDateBeforeStartDate,
  };
};

export const getPluralS = (count) => {
  return count > 1 ? 's' : '';
};
