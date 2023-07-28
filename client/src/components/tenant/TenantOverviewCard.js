function TenantOverviewCard({ tenant }) {
  return (
    <div className='card-body'>
      <div className='row'>
        <div className='col-sm-4'>
          <p className='mb-0'>Full Name</p>
        </div>
        <div className='col-sm-7'>
          <p className='text-muted mb-0'>
            {tenant.firstName} {tenant.lastName}
          </p>
        </div>
      </div>
      <hr />
      <div className='row'>
        <div className='col-sm-4'>
          <p className='mb-0'>Phone</p>
        </div>
        <div className='col-sm-7'>
          <p className='text-muted mb-0'>{tenant.phoneNumber}</p>
        </div>
      </div>
      <hr />
      <div className='row'>
        <div className='col-sm-4'>
          <p className='mb-0'>Email</p>
        </div>
        <div className='col-sm-7'>
          <p className='text-muted mb-0'>{tenant.email}</p>
        </div>
      </div>
      <hr />
      <div className='row'>
        <div className='col-sm-4'>
          <p className='mb-0'>Date of Birth</p>
        </div>
        <div className='col-sm-7'>
          <p className='text-muted mb-0'>{new Date(tenant.birthDate).toLocaleDateString()}</p>
        </div>
      </div>
      <hr />
      <div className='row'>
        <div className='col-sm-4'>
          <p className='mb-0'>Employment</p>
        </div>
        <div className='col-sm-7'>
          <p className='text-muted mb-0'>{tenant.occupation}</p>
        </div>
      </div>
    </div>
  );
}

export default TenantOverviewCard;
