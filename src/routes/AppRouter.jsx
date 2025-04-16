import { Navigate, Route, Routes, useLocation } from "react-router"
import Home from '../components/home.jsx'
import WhatName from "../components/WhatName.jsx"
import QuestionsFrequently from "../components/QuestionsFrequently.jsx"


export const AppRouter = () => {
    const location = useLocation()

    return (
        <>
            <Routes>
                <Route path="/" element={<WhatName />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/" element={<Navigate to="/" />}></Route>
                <Route path="*" element={<Navigate to="/" />}></Route>
            </Routes>
            {location.pathname === "/home" && <QuestionsFrequently />}
        </>
    )
}