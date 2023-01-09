
const Nav = ({Toggle}) => {
    return (
        <div className="Nav">
            <h1 className="H1">Counter</h1>
            
            <button className="Button" 
            onClick={Toggle}>
                Toggle Counter
            </button>
        </div>
    );
}

export default Nav;
