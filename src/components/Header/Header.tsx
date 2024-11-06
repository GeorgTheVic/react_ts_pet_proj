import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <div className="header">
                <Link to='/account' className="header__link">Account</Link>
                <Link to='/tasks' className="header__link">Tasks</Link>
                <Link to='/friends' className="header__link">Friends</Link>
                <Link to='/budget' className="header__link">Budget</Link>
            </div>
        </>
    )
}

export default Header