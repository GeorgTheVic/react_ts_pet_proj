import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <div className="header">
                <Link to='/account' >Account</Link>
                <Link to='/tasks' >Tasks</Link>
                <Link to='/friends' >Friends</Link>
                <Link to='/budget' >Budget</Link>
            </div>
        </>
    )
}

export default Header