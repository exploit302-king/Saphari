import { useState, useEffect, useRef } from "react";
import { FaBars, FaBell, FaUserCircle, FaSearch, } from "react-icons/fa";
import "./Dashboard_css/topbar.css";

function Topbar({ toggleSidebar }) {
    const [search, setSearch] = useState("");
    const [profileOpen, setProfileOpen] = useState(false);
    const profileRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(e) {
            if (
                profileRef.current &&
                !profileRef.current.contains(e.target)
            ) {
                setProfileOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
    }, []);
    useEffect(() => {
        function handleEsc(e) {
            if (e.key === "Escape") {
                setProfileOpen(false);
            }
        }
        window.addEventListener("keydown", handleEsc);
        return () =>
            window.removeEventListener(
                "keydown",
                handleEsc
            );
    }, []);
    const handleSearch = () => {
        console.log(search);
    };
    return (
        <header className="topbar">
            <div className="topbar-left">
                <button
                    className="topbar-menu-btn"
                    onClick={toggleSidebar}
                >
                    <FaBars />
                </button>
                <div className="search-box">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                    />
                </div>
            </div>
            <div className="topbar-right">
                <button className="icon-btn">
                    <FaBell />
                    <span className="notification-badge">
                        3
                    </span>
                </button>
                <div className="profile-wrapper" ref={profileRef} >
                    <button className="profile-btn" onClick={() => setProfileOpen(!profileOpen) } >
                        <FaUserCircle />
                    </button>
                    {profileOpen && (
                        <div className="profile-dropdown">
                            <button>
                                My Profile
                            </button>
                            <button>
                                Settings
                            </button>
                            <button>
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
export default Topbar;