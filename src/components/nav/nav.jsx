import "./nav.css"
import { Link } from "react-router-dom"
export function Navbar() {
    return (
        <nav>
            <Link to="/"> <h1>  React Project - 4nkct 2023 </h1> </Link>
            <Link to="/contact "> <h1> Contatos Page </h1> </Link>

        </nav>
    )
}