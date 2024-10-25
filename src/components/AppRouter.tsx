import { Route, Routes } from "react-router-dom"
import Account from "../pages/Account"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/account" element={<Account/>}/>
        </Routes>
    )
}

export default AppRouter