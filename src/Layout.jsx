import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Navbar2 from "./Navbar2.jsx";
import NavbarKids from "./NavbarKids.jsx";
import Footer from "./Footer.jsx";
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
import Space from "./space.jsx";
import Quiz from "./Quiz.jsx";
import Games from "./Games.jsx";
import Videos from "./Videos.jsx";
import CareerDetails from "./CareerDetails.jsx";
import Chatbot from "./ChatBot.jsx";
import Allcolleges from "./Allcolleges.jsx";
import Allcourses from "./Allcourses.jsx";

function Layout() {
    const location = useLocation(); // Now correctly inside Router

    useEffect(() => {
        console.log("Current Path:", location.pathname);
    }, [location]);

    const hideNavbarRoutes = ["/Arpage"];
    const hideFooterRoutes = ["/Arpage", "/Jigsaw"];

    const KidsNavbar =
        ["/Kids","/Login"].includes(location.pathname) ||
        location.pathname.startsWith("/discussion/");

    return (
        <>
            {/* Conditionally render Navbar */}
            {!hideNavbarRoutes.includes(location.pathname) &&
                (KidsNavbar ? <NavbarKids /> :<Navbar />)
            }

            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/Arpage" element={<Arpage />} />
                <Route path="/Newshub" element={<Newshub />} />
                <Route path="/Kids" element={<Kids />} />
                <Route path="/Jigsaw" element={<Jigsaw />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Community" element={<Community />} />
                <Route path="/discussion/:title" element={<Discussion />} />
                <Route path="/Space" element={<Space />} />
                <Route path="/construction" element={<Construction />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/Quiz" element={<Quiz />} />
                <Route path="/Games" element={<Games />} />
                <Route path="/Youtube" element={<Videos />} />
                <Route path="/Options" element={<CareerDetails />} />
                <Route path="/Allcolleges" element={<Allcolleges />} />
                <Route path="/Allcourses" element={<Allcourses />} />
            </Routes>
            {/* Conditionally render Footer */}
            {!hideFooterRoutes.includes(location.pathname) && <Footer />}
        </>
    );
}

export default Layout;
