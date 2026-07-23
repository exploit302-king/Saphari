import { useState } from "react";
import "../Dashboard_Layout_css/Settings.css";

function Settings() {

    const [settings, setSettings] = useState({
        storeName: "",
        email: "",
        phone: "",
        currency: "USD",
        password: "",
        confirmPassword: "",
        emailNotifications: true,
        orderAlerts: true,
    });

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setSettings((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(settings);
    };

    return (

        <div className="settings-page">

            <h1>Settings</h1>

            <form
                className="settings-form"
                onSubmit={handleSubmit}
            >

                <div className="settings-card">

                    <h2>Store Information</h2>

                    <input
                        type="text"
                        name="storeName"
                        placeholder="Store Name"
                        value={settings.storeName}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Store Email"
                        value={settings.email}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={settings.phone}
                        onChange={handleChange}
                    />

                    <select
                        name="currency"
                        value={settings.currency}
                        onChange={handleChange}
                    >

                        <option>USD</option>
                        <option>PKR</option>
                        <option>EUR</option>

                    </select>

                </div>

                <div className="settings-card">

                    <h2>Security</h2>

                    <input
                        type="password"
                        name="password"
                        placeholder="New Password"
                        value={settings.password}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={settings.confirmPassword}
                        onChange={handleChange}
                    />

                </div>

                <div className="settings-card">

                    <h2>Preferences</h2>

                    <label>

                        <input
                            type="checkbox"
                            name="emailNotifications"
                            checked={settings.emailNotifications}
                            onChange={handleChange}
                        />

                        Email Notifications

                    </label>

                    <label>

                        <input
                            type="checkbox"
                            name="orderAlerts"
                            checked={settings.orderAlerts}
                            onChange={handleChange}
                        />

                        Order Alerts

                    </label>

                </div>

                <button
                    className="save-btn"
                    type="submit"
                >
                    Save Changes
                </button>

            </form>

        </div>

    );
}

export default Settings;