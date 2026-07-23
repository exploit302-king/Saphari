import { useState } from "react";
import ordersData from "../../data/orders";
import "../Dashboard_Layout_css/Orders.css";
function Orders() {

    const [orders] = useState(ordersData);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");

    const filteredOrders = orders.filter((order) => {

        const matchSearch =
            order.id.toLowerCase().includes(search.toLowerCase()) ||
            order.customer.toLowerCase().includes(search.toLowerCase());

        const matchStatus =
            status === "All" || order.status === status;

        return matchSearch && matchStatus;

    });

    return (
        <div className="orders-page">
            <div className="orders-page-header">
                <h1>Orders</h1>
            </div>
            <div className="orders-filters">
                <input
                    type="text"
                    placeholder="Search by Order ID or Customer..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="All">All Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                </select>
            </div>
            <div className="orders-table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Amount</th>
                            <th>Pay.Status</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.length > 0 ? (
                            filteredOrders.map((order) => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>

                                    <td>{order.customer}</td>

                                    <td>{order.products}</td>

                                    <td>Rs. {order.amount}</td>

                                    <td>
                                        <span
                                            className={
                                                order.payment === "Paid"
                                                    ? "payment-paid"
                                                    : "payment-pending"
                                            }
                                        >
                                            {order.payment}
                                        </span>
                                    </td>

                                    <td>
                                        <span
                                            className={
                                                order.status === "Delivered"
                                                    ? "status-delivered"
                                                    : order.status === "Shipped"
                                                        ? "status-shipped"
                                                        : order.status === "Processing"
                                                            ? "status-processing"
                                                            : "status-pending"
                                            }
                                        >
                                            {order.status}
                                        </span>
                                    </td>

                                    <td>{order.date}</td>

                                    <td className="order-actions">

                                        <button className="view-btn">
                                            View
                                        </button>

                                        <button className="edit-btn">
                                            Update
                                        </button>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="8"
                                    className="no-orders"
                                >
                                    No orders found.
                                </td>

                            </tr>

                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Orders;