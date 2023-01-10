
const Counter = ({toggle, increment, decrement, counter}) => {
    return (
        <div className="Div">
            <div 
            className={toggle ? 'hide' : 'content'}>
                
                <h1 className="H1">
                    Counter
                </h1>

                <p>{counter}</p>

                <button className="Button btnFont"
                onClick={increment}>
                    +
                </button>
                
                <button className="Button btnFont"
                onClick={decrement}>
                    -
                </button>
            </div>
        </div>
    );
}

export default Counter;
