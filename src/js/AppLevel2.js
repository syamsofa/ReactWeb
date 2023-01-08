import { Link, Outlet } from "react-router-dom";

export default function AppLevel2() {
    return (
        <div>
            <h1>Simple React Antd</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                }}
            >
                <Link to="/login">Login</Link> |{" "}
                <Link to="/invoices">Invoices</Link> |{" "}
                <Link to="/expenses">Expenses</Link> |{" "}
                <Link to="/peta">Peta</Link> |{" "}
                <Link to="/wweb">WhatsApp Web</Link>
            </nav>
            <Outlet />
        </div>
    );
}