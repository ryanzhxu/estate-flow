import {useDispatch} from "react-redux";
import DeleteConfirmationModal from "../../shared/pages/property/DeleteConfirmationModal";
import {useState} from "react";
import {deleteTenantAsync} from "../../redux/tenants/tenantsThunks";

function TenantProfileCard({ tenant }) {
    const dispatch = useDispatch();

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const tenantFullName = `${tenant.firstName} ${tenant.middleName ? `${tenant.middleName.charAt(0)}.` : ''} ${tenant.lastName}`;
    const deleteModalContent = (
      <div>
          <p>You are about to delete the tenant {tenantFullName}. This action cannot be undone.</p>
          <p>Before proceeding, please consider the following:</p>
          <ul>
              <li>
                All data associated with this tenant will be deleted, including lease agreement, payment history, etc.
              </li>
              <li>
                The tenant will be removed from any properties it is registered under
              </li>
          </ul>
          <p>Are you sure you want to proceed with this deletion?</p>
      </div>
    );

    const handleDelete = () => {
        dispatch(deleteTenantAsync(tenant._id))
        // TODO
    }


  return (
    <div className='card-body text-center'>
      <h5 className='my-3'>{tenantFullName}</h5>
      <img
        src='https://cdn-icons-png.flaticon.com/512/65/65581.png'
        alt='avatar'
        className='rounded-circle img-fluid'
        style={{ width: '150px' }}
      />
      <div className='d-flex justify-content-center mt-3 mb-2'>
        <button className='btn btn-primary' type='button'>
          Edit
        </button>
        <button className='btn btn-outline-primary ms-1' type='button' onClick={() => setIsDeleteModalOpen(true)}>
          Delete
        </button>
      </div>
      <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onCancel={() => setIsDeleteModalOpen(false)}
          onDelete={handleDelete}
          modalTitle="Warning: Deleting a tenant"
          modalContent={deleteModalContent}
      />
    </div>
  );
}

// https://mdbootstrap.com/docs/standard/extended/profiles/

export default TenantProfileCard;
