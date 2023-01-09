
const Content = ({ counter, incCounter, decCounter, toggle }) => {
    return (
        <div  className={toggle ? 'hide' : 'content'}>
            <h1 className="H1">React Counter</h1>
            
            <p> {counter} </p>
            
            <button className="Button" 
            onClick={incCounter} >
                Plus
            </button>
            
            <button className="Button" 
            onClick={decCounter} >
                Minus
            </button>
        </div>
    );
}

export default Content;
