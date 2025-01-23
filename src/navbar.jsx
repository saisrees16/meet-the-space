import './navbar.css';
function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
                <figure>
                    <img src="https://placehold.co/70x40" alt="logo" />
                    <figcaption>Meet the Space</figcaption>
                </figure>
            </div>
            <nav>
                <a href="#">Home</a>
                <a href="#">Contact</a>
                <a href="#">About</a>
                <select>
                    <option>Select station:</option>
                    <option><a href="">SpaceX</a></option>
                    <option><a href="">Nasa</a></option>
                    <option><a href="">Isro</a></option>
                </select>
                <a href="#">Login</a>
            </nav>
        </div>
    )
}

export default Navbar;