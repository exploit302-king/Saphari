import { useState } from "react";
import "./Dashboard_css/recentOrders.css";

function RecentOrders() {

  const [orders] = useState([]);

  return (

    <div className="orders-card">

      <div className="orders-header">

        <h2>Recent Orders</h2>

      </div>

      <div className="table-wrapper">

        <table>

          <thead>

            <tr>

              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {orders.length > 0 ? (

              orders.map((order) => (

                <tr key={order.id}>

                  <td>{order.id}</td>

                  <td>{order.customer}</td>

                  <td>{order.product}</td>

                  <td>{order.amount}</td>

                  <td>
                    <span
                      className={`status ${order.status.toLowerCase()}`}
                    >
                      {order.status}
                    </span>
                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="5"
                  className="no-data"
                >
                  No orders found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>

  );
}

export default RecentOrders;