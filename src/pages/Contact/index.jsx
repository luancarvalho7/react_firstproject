import { Link } from "react-router-dom";

export function Contact() {
    return (
        <div className="Contact">
            <h1>contact</h1>
            <Link to="/nested/1">Contato 1</Link>
            <Link to="/nested/2">Contato 2</Link>
            <Link to="/nested/3">Contato 3</Link>
        </div>
    )
}