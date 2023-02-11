import { Outlet } from "react-router-dom";
import { Navbar } from "./components/nav/nav";

export function App() {

    return (
        
        <div className="App">
            <Navbar />
            <Outlet />
        </div>
    )
}