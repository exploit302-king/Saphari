import { useState } from "react";
import usersData from "../../data/users";
import { FaUserCircle } from "react-icons/fa";
import { showSuccess, showInfo } from "../../utils/toast";
import "../Dashboard_Layout_css/Users.css";

function Users() {

    const [users, setUsers] = useState(usersData);
    const [search, setSearch] = useState("");
    const [role, setRole] = useState("All");
    const [status, setStatus] = useState("All");


    const filteredUsers = users.filter((user) => {

        const matchSearch =
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase());

        const matchRole =
            role === "All" || user.role === role;

        const matchStatus =
            status === "All" || user.status === status;

        return matchSearch && matchRole && matchStatus;

    });

    const toggleStatus = (id) => {

        setUsers(

            users.map((user) =>

                user.id === id
                    ? {
                        ...user,
                        status:
                            user.status === "Active"
                                ? "Blocked"
                                : "Active",
                    }
                    : user

            )

        );

        showSuccess("User status updated.");

    };

    const deleteUser = (id) => {

        setUsers(

            users.filter((user) => user.id !== id)

        );

        showInfo("User deleted.");

    };

    return (
        <div className="users-page">
            <div className="users-header">
                <h1>Users</h1>
            </div>
            <div className="users-filters">

                <input
                    type="text"
                    placeholder="Search Name or Email..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="All">All Roles</option>
                    <option value="Admin">Admin</option>
                    <option value="Seller">Seller</option>
                    <option value="Buyer">Buyer</option>
                </select>

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Blocked">Blocked</option>
                </select>

            </div>
            <div className="users-table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Last Login</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {filteredUsers.length > 0 ? (

                            filteredUsers.map((user) => (

                                <tr key={user.id}>

                                    <td>

                                        <FaUserCircle className="customer-avatar" />

                                    </td>

                                    <td>{user.name}</td>

                                    <td>{user.email}</td>

                                    <td>

                                        <span className={`role-${user.role.toLowerCase()}`}>
                                            {user.role}
                                        </span>

                                    </td>

                                    <td>

                                        <span
                                            className={
                                                user.status === "Active"
                                                    ? "status-active"
                                                    : "status-blocked"
                                            }
                                        >
                                            {user.status}
                                        </span>

                                    </td>

                                    <td>{user.lastLogin}</td>

                                    <td className="customer-actions">

                                        <button className="view-btn">
                                            View
                                        </button>

                                        <button className="edit-btn">
                                            Edit
                                        </button>

                                        <button
                                            className="edit-btn"
                                            onClick={() => toggleStatus(user.id)}
                                        >
                                            {user.status === "Active"
                                                ? "Block"
                                                : "Unblock"}
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() => deleteUser(user.id)}
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="7"
                                    className="no-users"
                                >
                                    No users found.
                                </td>

                            </tr>

                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Users;