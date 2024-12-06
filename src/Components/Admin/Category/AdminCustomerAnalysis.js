import React from 'react';

const AdminCustomerAnalysis = ({ customerdata }) => {
  // Log the full customer data once
  // console.log("Customer Data:", customerdata);

  return (
    <>
      <div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>Customer Table</h3>
        </div>
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">Customer ID</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Total Orders</th>
              <th scope="col">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(customerdata) && customerdata.length > 0 ? (
              customerdata.map((customer) => {
                // Log each individual customer during mapping
                console.log("Customer Entry:", customer);

                return (
                  <tr key={customer?.customer_id || Math.random()}>
                    <td>{customer?.customer_id ?? 'N/A'}</td>
                    <td>{customer?.customer_name ?? 'N/A'}</td>
                    <td>{customer?.total_orders ?? 'N/A'}</td>
                    <td>{customer?.total_price ? Math.floor(customer.total_price) : 'N/A'}</td>

                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No Customers Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminCustomerAnalysis;
