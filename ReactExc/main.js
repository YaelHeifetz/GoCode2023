const SimpleElement = () => <div onClick={() => alert('Hi!!')}>Click Me!</div>

ReactDOM.render(<SimpleElement/>, document.getElementById('app'));


function NumberList() {

    const numbers = [1, 2, 3, 4, 5];
    
    const listItems = numbers.map((number) =>
    
    <li>{number}</li>
    
    );
    
    return (
        <ul>{listItems}</ul>
        );    
    }
    
    ReactDOM.render(<NumberList/>, document.getElementById('root'));

    