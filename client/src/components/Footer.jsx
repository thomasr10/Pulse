import { Link }  from "react-router";

export default function Footer () {

    return (
        <footer className="pt-48 section-wrapper">
            <span>Pulse</span>
            <div className="link-container mt-32">
                <Link to={'/#'}>Terms</Link>
                <Link to={'/#'}>Privacy</Link>
                <Link to={'/#'}>Socials</Link>
            </div>
            <p className="txt-center small-gray-txt mt-24">© { new Date().getFullYear()} Pulse. All Rights Reserved</p>
        </footer>
    )
}