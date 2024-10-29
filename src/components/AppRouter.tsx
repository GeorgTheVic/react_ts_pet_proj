import { Route, Routes } from "react-router-dom"
import Account from "../pages/Account"
import Tasks from "../pages/Tasks"
import Friends from "../pages/Friends"
import Budget from "../pages/Budget"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/account" element={<Account/>}/>
            <Route path="/tasks" element={<Tasks/>}/>
            <Route path="/friends" element={<Friends/>}/>
            <Route path="/budget" element={<Budget/>}/>
        </Routes>
    )
}

export default AppRouter