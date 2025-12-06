import { Link } from "react-router";

export default function MaxWidthButton ({ children, link }) {

    return (
        
            <Link className="btn-primary form-btn link-btn" to={link}>{ children }</Link>
    )
}