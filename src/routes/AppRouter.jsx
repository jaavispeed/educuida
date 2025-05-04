import { Navigate, Route, Routes, useLocation } from "react-router"
import Home from '../components/Home.jsx'
import LandingPage from "../components/LandingPage.jsx"
import QuestionsFrequently from "../components/QuestionsFrequently.jsx"
import Test from "../components/test.jsx"


export const AppRouter = () => {
    const location = useLocation()

    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/test" element={<Test />}></Route>
                <Route path="/" element={<Navigate to="/" />}></Route>
            </Routes>
            {location.pathname === "/home" && <QuestionsFrequently />}
        </>
    )
}