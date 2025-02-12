import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Navbar2 from "./Navbar2.jsx";
import Home from "./Home.jsx";
import Arpage from "./Arpage.jsx";
import Kids from "./Kids.jsx";
import Newshub from "./Newshub.jsx";
import Jigsaw from "./Jigsaw.jsx";
import Community from "./Community.jsx";
import Login from "./Login.jsx";
import Discussion from "./Discussion.jsx";
import Construction from "./Construction.jsx";
import Careers from "./Careers.jsx";

function App() {
    return (
        <Router basename="/meet-the-space">
            <Layout />
        </Router>
    );
}

function Layout() {
    const location = useLocation();
    const hideNavbarRoutes = ["/Arpage"];
    const communityRoutes = ["/Community"]; // Routes where CommunityNavbar should be displayed

    return (
        <>
            {hideNavbarRoutes.includes(location.pathname) ? null :
                communityRoutes.includes(location.pathname) ? <Navbar2 /> : <Navbar />
            }
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Arpage" element={<Arpage />} />
                <Route path="/Newshub" element={<Newshub />} />
                <Route path="/Kids" element={<Kids />} />
                <Route path="/Jigsaw" element={<Jigsaw />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Community" element={<Community />} />
                <Route path="/discussion/:title" element={<Discussion />} />
                <Route path="/construction" element={<Construction />} />
                <Route path="/careers" element={<Careers />} />
            </Routes>
        </>
    );
}

export default App;
