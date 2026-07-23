import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import {
    FaHome,
    FaBoxOpen,
    FaShoppingCart,
    FaUsers,
    FaUserFriends,
    FaHeart,
    FaTimes,
    FaChartBar,
    FaCog,
    FaSignOutAlt,
    FaChevronDown,
    FaChevronRight,
} from "react-icons/fa";

import "./Dashboard_css/sidebar.css";

function Sidebar({ sidebarOpen, setSidebarOpen }) {

    const menuItems = [
        {
            title: "Dashboard",
            icon: <FaHome />,
            path: "/dashboard",
        },

        {
            title: "Products",
            icon: <FaBoxOpen />,
            subMenu: [
                {
                    title: "All Products",
                    path: "/dashboard/products",
                },
                {
                    title: "Add Product",
                    path: "/dashboard/add-product",
                },
            ],
        },

        {
            title: "Orders",
            icon: <FaShoppingCart />,
            path: "/dashboard/orders",
        },
        {
            title: "Users",
            icon: <FaUsers />,
            path: "/dashboard/users",
        },

        // {
        //     title: "Customers",
        //     icon: <FaUserFriends />,
        //     path: "/dashboard/customers",
        // },

        {
            title: "Analytics",
            icon: <FaChartBar />,
            path: "/dashboard/analytics",
        },

        {
            title: "Settings",
            icon: <FaCog />,
            path: "/dashboard/settings",
        },

        {
            title: "Logout",
            icon: <FaSignOutAlt />,
            path: "/logout",
        },
    ];

    const [openMenu, setOpenMenu] = useState(null);
    const location = useLocation();

    useEffect(() => {
        setSidebarOpen(false);
    }, [location.pathname, setSidebarOpen]);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                setSidebarOpen(false);
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [setSidebarOpen]);

    useEffect(() => {
        if (
            location.pathname.startsWith("/dashboard/products")
        ) {
            setOpenMenu(1);
        }
    }, [location.pathname]);

    return (
        <>
            {sidebarOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>

                <div className="sidebar-header">

                    <Link className="logo" to="/">
                        <h3>Saphari</h3> 
                    </Link>

                    <button
                        className="close-btn"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <FaTimes />
                    </button>

                </div>

                <ul className="sidebar-menu">

                    {menuItems.map((item, index) => (

                        <li key={index}>

                            {item.subMenu ? (

                                <>
                                    <button
                                        className="menu-btn"
                                        onClick={() =>
                                            setOpenMenu(
                                                openMenu === index ? null : index
                                            )
                                        }
                                    >

                                        <div className="menu-left">

                                            <span className="menu-icon">
                                                {item.icon}
                                            </span>

                                            {item.title}

                                        </div>

                                        {openMenu === index ? (
                                            <FaChevronDown />
                                        ) : (
                                            <FaChevronRight />
                                        )}

                                    </button>

                                    <ul
                                        className={`submenu ${openMenu === index
                                            ? "submenu-open"
                                            : ""
                                            }`}
                                    >

                                        {item.subMenu.map((subItem, i) => (

                                            <li key={i}>

                                                <NavLink to={subItem.path} className={({ isActive }) => isActive ? "submenu-item active" : "submenu-item"} >

                                                    {subItem.title}

                                                </NavLink>

                                            </li>

                                        ))}

                                    </ul>

                                </>

                            ) : (

                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "menu-item active"
                                            : "menu-item"
                                    }
                                >

                                    <span className="menu-icon">

                                        {item.icon}

                                    </span>

                                    {item.title}

                                </NavLink>

                            )}

                        </li>

                    ))}

                </ul>

            </aside>
        </>
    );
}

export default Sidebar;