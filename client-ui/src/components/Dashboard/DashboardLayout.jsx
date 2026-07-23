import { useState } from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import "./Dashboard_css/DashboardLayout.css";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="dashboard-layout">

            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <div className="dashboard-main">

                <Topbar
                    toggleSidebar={toggleSidebar}
                />

                <main className="dashboard-content">

                    <Outlet />

                </main>

            </div>

        </div>
    );
}

export default DashboardLayout;