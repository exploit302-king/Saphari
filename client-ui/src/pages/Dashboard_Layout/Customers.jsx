import { useState } from "react";
import "../Dashboard_Layout_css/Users.css";
import customersData from "../../data/customers.js";
import { FaUserCircle } from "react-icons/fa";
function Customers() {

    const [customers, setCustomers] = useState(customersData);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");

    const filteredCustomers = customers.filter((customer) => {
        const matchSearch =
            customer.name.toLowerCase().includes(search.toLowerCase()) ||
            customer.email.toLowerCase().includes(search.toLowerCase()) ||
            customer.phone.toLowerCase().includes(search.toLowerCase());
        const matchStatus =
            status === "All" || customer.status === status;
        return matchSearch && matchStatus;
    });
    const toggleStatus = (id) => {
        setCustomers(
            customers.map((customer) =>
                customer.id === id
                    ? {
                        ...customer,
                        status:
                            customer.status === "Active"
                                ? "Blocked"
                                : "Active",
                    }
                    : customer
            )
        );
        showSuccess("Customer status updated.");
    };
    const deleteCustomer = (id) => {
        setCustomers(
            customers.filter(
                (customer) => customer.id !== id
            )
        );
        showInfo("Customer deleted.");
    };

    return (
        <div className="customers-page">
            <div className="customers-header">
                <h1>Customers</h1>
            </div>
            <div className="customers-filters">
                <input
                    type="text"
                    placeholder="Search Name, Email or Phone..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Blocked">Blocked</option>
                </select>


            </div>
            <div className="customers-table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Orders</th>
                            <th>Total Spent</th>
                            <th>Joined</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {filteredCustomers.length > 0 ? (

                            filteredCustomers.map((customer) => (

                                <tr key={customer.id}>

                                    <td>

                                        <FaUserCircle
                                            className="customer-avatar"
                                        />

                                    </td>

                                    <td>{customer.name}</td>

                                    <td>{customer.email}</td>

                                    <td>{customer.phone}</td>

                                    <td>{customer.orders}</td>

                                    <td>Rs. {customer.spent}</td>

                                    <td>{customer.joined}</td>

                                    <td>

                                        <span
                                            className={
                                                customer.status === "Active"
                                                    ? "status-active"
                                                    : "status-blocked"
                                            }
                                        >
                                            {customer.status}
                                        </span>

                                    </td>

                                    <td className="customer-actions">

                                        <button className="view-btn">
                                            View
                                        </button>

                                        <button
                                            className="edit-btn"
                                            onClick={() => toggleStatus(customer.id)}
                                        >
                                            {customer.status === "Active"
                                                ? "Block"
                                                : "Unblock"}
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() => deleteCustomer(customer.id)}
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="9"
                                    className="no-customers"
                                >
                                    No customers found.
                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>
            </div>
        </div>
    );
}
export default Customers;