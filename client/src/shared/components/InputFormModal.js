import Button from '@atlaskit/button';
import React from 'react';
import { Modal } from 'react-bootstrap';
import { NumericFields } from '../constants/NumericFields';
import { SelectionFields } from '../constants/SelectionFields';
import { getSelectedIndex, getSelectOptions, saveValueToObject } from '../services/Helpers';
import InputField from './InputField';

const InputFormModal = ({ isModalOpen, setIsModalOpen, isEdit = false, type, object, requiredFields, onSubmit }) => {
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
            const defaultValue = isSelect
              ? getSelectedIndex(SelectionFields[field], object[field])
              : object[field]
              ? object[field]
              : '';

            const isNumeric = NumericFields.includes(field);
            const options = isSelect && getSelectOptions(SelectionFields[field]);

            const handleSelectOnChange = (selectedOptions) => {
              if (!Array.isArray(selectedOptions)) {
                const selectedValue = selectedOptions ? selectedOptions.value : '';
                object[field] = selectedValue;
              } else {
                object[field] = selectedOptions.map((option) => option.value);
              }
            };

            const handleOnChange = (e) => {
              saveValueToObject(object, field, e.target.value);
            };

            return (
              <InputField
                key={field}
                field={field}
                defaultValue={defaultValue}
                type={isNumeric ? 'number' : 'text'}
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
        <Button appearance='subtle' onClick={() => setIsModalOpen(false)}>
          Cancel
        </Button>
        <Button appearance='primary' onClick={onSubmit}>
          {isEdit ? 'Submit changes' : 'Add'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InputFormModal;
