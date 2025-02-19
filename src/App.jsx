import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx"; // Move Layout to a separate file

function App() {
    return (
        <Router basename="/meet-the-space">
            <Layout />
        </Router>
    );
}

export default App;
