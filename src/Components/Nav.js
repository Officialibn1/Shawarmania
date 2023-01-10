
const Nav = ({ toggler }) => {
    return (
        <nav className="Nav">
            <h1 className="H1">
                Counter App
            </h1>

            <button onClick={toggler} className="Button">
                Toggle
            </button> 
        </nav>
    );
}

export default Nav;
