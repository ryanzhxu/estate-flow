import './LeaseOverviewCard.css';

function LeaseOverviewCard({ lease, address }) {
  return (
    <div className='tenant-lease-overview card'>
      <div className='card-header'>
        <h5 className='card-title mb-0'>
          Lease Details <i className='bi bi-caret-down-fill' />
        </h5>
      </div>
      <div className='card-body'>
        <div className='row row-spacing'>
          <div className='col-sm-6'>
            <p className='mb-0'>Residence</p>
          </div>
          <div className='col-sm-5'>
            <span className='text-muted mb-0'>{address.streetAddress}</span>
            <br />
            <span className='text-muted mb-0'>
              {address.city} {address.province} {address.postalCode}
            </span>
          </div>
        </div>
        <hr />
        <div className='row row-spacing'>
          <div className='col-sm-6'>
            <p className='mb-0'>Start Date</p>
          </div>
          <div className='col-sm-5'>
            <p className='text-muted mb-0'>{new Date(lease.startDate).toLocaleDateString()}</p>
          </div>
        </div>
        <hr />
        <div className='row row-spacing'>
          <div className='col-sm-6'>
            <p className='mb-0'>End Date</p>
          </div>
          <div className='col-sm-5'>
            <p className='text-muted mb-0'>{new Date(lease.endDate).toLocaleDateString()}</p>
          </div>
        </div>
        <hr />
        <div className='row row-spacing'>
          <div className='col-sm-6'>
            <p className='mb-0'>Lease Term</p>
          </div>
          <div className='col-sm-5'>
            <p className='text-muted mb-0'>{lease.term}</p>
          </div>
        </div>
        <hr />
        <div className='row row-spacing'>
          <div className='col-sm-6'>
            <p className='mb-0'>Lease Type</p>
          </div>
          <div className='col-sm-5'>
            <p className='text-muted mb-0'>{lease.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaseOverviewCard;
