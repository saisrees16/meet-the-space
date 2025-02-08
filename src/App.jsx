import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Arpage from "./Arpage.jsx";
import Kids from "./Kids.jsx";
import Newshub from "./Newshub.jsx";

function App() {
    return (
        <Router>
            <Layout />
        </Router>
    );
}

function Layout() {
    const location = useLocation();
    const hideNavbarRoutes = ["/Arpage"]; // Add routes where Navbar should be hidden

    return (
        <>
            {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Arpage" element={<Arpage />} />
                <Route path="/Newshub" element={<Newshub />} />
                <Route path="/Kids" element={<Kids />} />
            </Routes>
        </>
    );
}

export default App;
