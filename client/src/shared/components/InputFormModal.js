import React from 'react';
import { Modal } from 'react-bootstrap';
import { DateFields } from '../constants/DateFields';
import { NumericFields } from '../constants/NumericFields';
import { SelectionFields } from '../constants/SelectionFields';
import { UploadFields } from '../constants/UploadFields';
import {
  getCapitalizedString,
  getConvertedDate,
  getSelectedIndex,
  getSelectOptions
} from '../services/Helpers';
import InputField from './InputField';
import ImageUploader from '../../components/ImageUploader';
import { MultiWordFields } from '../constants/MultiWordFields';

const InputFormModal = ({ isModalOpen, setIsModalOpen, isEdit = false, type, object, setObject, requiredFields, onSubmit, onImageUpload }) => {
  return (
    <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)} centered>
      <Modal.Header>
        <Modal.Title>
          {isEdit ? 'Edit' : 'Add'} {type}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-content panel-warning' style={{ border: 'none' }}>
        <form style={{ display: 'grid', gap: '15px' }}>
          {Object.keys(object).map((field) => {
            const isSelect = Object.keys(SelectionFields).includes(field);
            const isMulti = field === 'amenities';
            const isRequired = requiredFields.includes(field);

            const type = DateFields.includes(field) ? 'date' : NumericFields.includes(field) ? 'number' : 'text';
            const options = isSelect && getSelectOptions(SelectionFields[field]);

            const defaultValue = () => {
              if (!object[field]) {
                return '';
              }

              if (DateFields.includes(field)) {
                return getConvertedDate(object[field]);
              } else if (isSelect && !isMulti) {
                return getSelectedIndex(SelectionFields[field], object[field]);
              }
              return object[field];
            };

            const handleSelectOnChange = (selectedOptions) => {
              if (!Array.isArray(selectedOptions)) {
                const selectedValue = selectedOptions ? selectedOptions.value : '';
                setObject({...object, [field]: selectedValue});
              } else {
                setObject({...object, [field]: selectedOptions.map((option) => option.value)});
              }
            };

            const handleOnChange = (e) => {
              setObject({...object, [field]: e.target.value});
            };

            return UploadFields.includes(field) ? (
              <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {isRequired && <span style={{ color: '#02687D' }}>*&nbsp;</span>}
                  <label>
                    {Object.keys(MultiWordFields).includes(field)
                      ? MultiWordFields[field]
                      : getCapitalizedString(field)}
                    :
                  </label>
                </div>
                <ImageUploader onImageSelected={onImageUpload} />
              </div>
            ) : (
              <InputField
                key={field}
                field={field}
                defaultValue={defaultValue()}
                type={type}
                isRequired={isRequired}
                isSelect={isSelect}
                isMulti={isMulti}
                options={options ?? []}
                onChange={isSelect ? handleSelectOnChange : handleOnChange}
              />
            );
          })}
        </form>
      </Modal.Body>
      <Modal.Footer>
        <div className='btn btn-outline-primary' onClick={onSubmit}>
          {isEdit ? 'Submit changes' : 'Add'}
        </div>
        <div className='btn btn-outline-secondary' onClick={() => setIsModalOpen(false)}>
          Cancel
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default InputFormModal;
