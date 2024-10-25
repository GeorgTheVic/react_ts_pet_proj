import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link to='/account'>Account</Link>
                <Link to='/tasks'>Tasks</Link>
                <Link to='/friends'>Friends</Link>
                <Link to='/budget'>Budget</Link>
            </div>
        </div>
    )
}

export default Header