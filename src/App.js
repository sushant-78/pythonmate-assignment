import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Home from "./pages/HomePage/Home";
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/signup"} element={<SignupPage />} />
                    <Route path={"/login"} element={<LoginPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
