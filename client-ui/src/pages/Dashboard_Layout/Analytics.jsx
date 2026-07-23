import { FaShoppingCart, FaUsers, FaBoxOpen, FaCheckCircle, FaClock, } from "react-icons/fa";
import {
    ResponsiveContainer, BarChart, Bar, PieChart,
    Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";
import products from "../../data/product";
import orders from "../../data/orders";
// import customers from "../../data/customers";
import users from "../../data/users";
import "../Dashboard_Layout_css/Analytics.css";

function Analytics() {
    const totalRevenue = orders.reduce(
        (total, order) => total + Number(order.amount),
        0
    );
    const deliveredOrders = orders.filter(
        (order) => order.status === "Delivered"
    ).length;
    const pendingOrders = orders.filter(
        (order) => order.status === "Pending"
    ).length;
    const buyers = users.filter(user => user.role === "buyer");

    const bestCustomer = buyers.reduce((best, current) =>
        current.spent > best.spent ? current : best
    );
    const activeusers = users.filter(
        (customer) => customer.status === "Active"
    ).length;
    const revenueChartData = orders.map((order) => ({
        name: order.id,
        revenue: Number(order.amount),
    }));
    const processingOrders = orders.filter(
        (order) => order.status === "Processing"
    ).length;

    const shippedOrders = orders.filter(
        (order) => order.status === "Shipped"
    ).length;

    const blockedusers = users.filter(
        (customer) => customer.status === "Blocked"
    ).length;

    const paidOrders = orders.filter(
        (order) => order.payment === "Paid"
    ).length;

    const pendingPayments = orders.filter(
        (order) => order.payment === "Pending"
    ).length;

    const orderStatusData = [
        {
            name: "Pending",
            value: pendingOrders,
        },
        {
            name: "Processing",
            value: processingOrders,
        },
        {
            name: "Shipped",
            value: shippedOrders,
        },
        {
            name: "Delivered",
            value: deliveredOrders,
        },
    ];

    const recentOrders = [...orders]
        .sort((a, b) => b.id.localeCompare(a.id))
        .slice(0, 5);

    const topProducts = [...products]
        .slice(0, 5);

    const COLORS = [
        "#F59E0B",
        "#3B82F6",
        "#8B5CF6",
        "#10B981",
    ];

    return (
        <div className="analytics-page">
            <div className="analytics-header">
                <h1>Analytics</h1>
            </div>
            <div className="analytics-summary">

                <div className="summary-card">
                    <div>

                        <h2>
                            Rs. {totalRevenue.toLocaleString()}
                        </h2>

                        <div className="summary-details">

                            <p>Total Revenue</p>

                            <span className="growth positive">
                                ↑ 12.5% this month
                            </span>

                        </div>

                    </div>

                </div>

                <div className="summary-card">

                    <FaShoppingCart className="summary-icon" />

                    <div>

                        <h2>{orders.length}</h2>

                        <p>Total Orders</p>

                    </div>

                </div>

                <div className="summary-card">

                    <FaUsers className="summary-icon" />

                    <div>

                        <h2>{users.length}</h2>

                        <p>users</p>

                    </div>

                </div>

                <div className="summary-card">

                    <FaBoxOpen className="summary-icon" />

                    <div>

                        <h2>{products.length}</h2>

                        <p>Products</p>

                    </div>

                </div>

            </div>
            <div className="analytics-grid">

                <div className="analytics-card">

                    <FaCheckCircle className="analytics-card-icon success" />

                    <div>

                        <h2>{deliveredOrders}</h2>

                        <p>Delivered Orders</p>

                    </div>

                </div>

                <div className="analytics-card">

                    <FaClock className="analytics-card-icon warning" />

                    <div>

                        <h2>{processingOrders}</h2>

                        <p>Processing Orders</p>

                    </div>

                </div>

                <div className="analytics-card">

                    <FaUsers className="analytics-card-icon primary" />

                    <div>

                        <h2>{activeusers}</h2>

                        <p>Active users</p>

                    </div>

                </div>

                <div className="analytics-card">

                    <FaUsers className="analytics-card-icon danger" />

                    <div>

                        <h2>{blockedusers}</h2>

                        <p>Blocked users</p>

                    </div>

                </div>

                <div className="analytics-card">

                    <FaShoppingCart className="analytics-card-icon success" />

                    <div>

                        <h2>{paidOrders}</h2>

                        <p>Paid Orders</p>

                    </div>

                </div>

                <div className="analytics-card">

                    <FaShoppingCart className="analytics-card-icon warning" />

                    <div>

                        <h2>{pendingPayments}</h2>

                        <p>Pending Payments</p>

                    </div>

                </div>

            </div>
            <div className="chart-section">

                <div className="chart-card">

                    <h3>Revenue Overview</h3>

                    <ResponsiveContainer
                        width="100%"
                        height={320}
                    >

                        <BarChart data={revenueChartData}>

                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="name" />

                            <YAxis />

                            <Tooltip />

                            <Bar
                                dataKey="revenue"
                                radius={[8, 8, 0, 0]}
                                fill="#2563EB"
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

                <div className="chart-card">

                    <h3>Order Status</h3>

                    <ResponsiveContainer
                        width="100%"
                        height={320}
                    >

                        <PieChart>

                            <Pie
                                data={orderStatusData}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={95}
                                label
                            >

                                {orderStatusData.map((entry, index) => (

                                    <Cell
                                        key={index}
                                        fill={COLORS[index]}
                                    />

                                ))}

                            </Pie>

                            <Tooltip />

                            <Legend />

                        </PieChart>

                    </ResponsiveContainer>

                </div>

            </div>
            <div className="analytics-bottom">

                <div className="analytics-table-card">

                    <h3>Recent Orders</h3>

                    <table>

                        <thead>

                            <tr>

                                <th>Order</th>

                                <th>Customer</th>

                                <th>Amount</th>

                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {recentOrders.map((order) => (

                                <tr key={order.id}>

                                    <td>{order.id}</td>

                                    <td>{order.customer}</td>

                                    <td>Rs. {order.amount}</td>

                                    <td>{order.status}</td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

                <div className="analytics-table-card">

                    <h3>Top Products</h3>

                    <table>

                        <thead>

                            <tr>

                                <th>Product</th>

                                <th>Category</th>

                                <th>Stock</th>

                            </tr>

                        </thead>

                        <tbody>

                            {topProducts.map((product) => (

                                <tr key={product.id}>

                                    <td>{product.name}</td>

                                    <td>{product.category}</td>

                                    <td>{product.stock}</td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>
            <div className="analytics-insights">

                <h3>Quick Insights</h3>

                <div className="insights-grid">

                    <div className="insight-box">

                        <div className="summary-details">

                            <h4>Total Revenue</h4>

                            <p>Rs. {totalRevenue.toLocaleString()}</p>
                            <span className="growth positive">
                                ↑ 12.5% this month
                            </span>

                        </div>


                    </div>

                    <div className="insight-box">

                        <h4>Best Customer</h4>

                        <p>
                            {bestCustomer ? bestCustomer.name : "-"}
                        </p>

                    </div>

                    <div className="insight-box">

                        <h4>Top Product</h4>

                        <p>
                            {products.length > 0 ? products[0].name : "-"}
                        </p>

                    </div>

                    <div className="insight-box">

                        <h4>Conversion Rate</h4>

                        <p>

                            {users.length > 0
                                ? `${((orders.length / users.length) * 100).toFixed(0)}%`
                                : "0%"}

                        </p>

                    </div>

                </div>

            </div>
        </div>
    );
}
export default Analytics;