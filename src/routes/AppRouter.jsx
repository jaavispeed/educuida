import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import Home from '../components/Home.jsx'


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/" element={<Navigate to="/" />}></Route>
                <Route path="*" element={<Navigate to="/" />}></Route>
            </Routes>
        </BrowserRouter>
    )
}