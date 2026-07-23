import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from "recharts";
import "./Dashboard_css/salesChart.css";
function SalesChart() {

  const [salesData] = useState([]);

  return (

    <div className="chart-card">

      <h2>Monthly Sales</h2>

      <div className="chart-container">

        <ResponsiveContainer width="100%" height="100%">

          {salesData.length > 0 ? (

            <LineChart data={salesData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="sales"
                stroke="#00C896"
                strokeWidth={2}
              />

            </LineChart>

          ) : (

            <div className="chart-empty">
              No sales available.
            </div>

          )}

        </ResponsiveContainer>

      </div>

    </div>

  );
}

export default SalesChart;