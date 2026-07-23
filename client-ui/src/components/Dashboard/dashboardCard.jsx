import { useState } from "react";

import {
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaDollarSign,
} from "react-icons/fa";

import "./Dashboard_css/dashboardCard.css";
function DashboardCards() {

  const [stats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalCustomers: 0,
    totalRevenue: 0,
  });

  const cards = [
    {
      title: "Total Products",
      value: stats.totalProducts,
      icon: <FaBoxOpen />,
    },
    {
      title: "Total Orders",
      value: stats.totalOrders,
      icon: <FaShoppingCart />,
    },
    {
      title: "Customers",
      value: stats.totalCustomers,
      icon: <FaUsers />,
    },
    {
      title: "Revenue",
      value: `$${stats.totalRevenue}`,
      icon: <FaDollarSign />,
    },
  ];

  return (

    <div className="cards-grid">

      {cards.map((card, index) => (

        <div className="dashboard-card" key={index}>

          <div className="card-icon">
            {card.icon}
          </div>

          <div className="card-info">

            <h4>{card.title}</h4>

            <h2>{card.value}</h2>

          </div>

        </div>

      ))}

    </div>

  );
}

export default DashboardCards;