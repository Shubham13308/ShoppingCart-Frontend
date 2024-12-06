import React from 'react';

const CustomerName = ({ show, handleClose, customersdetails, handleShowOrder }) => {
  
  
  return (
    <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Customer Details</h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Customer ID</th>
                  <th>Customer Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {customersdetails && customersdetails.length > 0 ? (
                    customersdetails.map((customersdetails) => (
                    <tr key={customersdetails.customer_id}>
                    
                      <td>{customersdetails.customer_id}</td>
                      <td>{customersdetails.customer_name}</td>
                      <td>{customersdetails.customer_phn}</td>
                      <td>{customersdetails.customer_email}</td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => handleShowOrder(customersdetails.customer_id)}
                        >
                          Show Order
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No customers found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerName;
