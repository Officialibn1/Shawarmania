import { useEffect, useState } from "react";


function App() {

  // useState and useEffect for handling text and resource type
  
  const [resourceType, setResourceType] = useState('posts');
  const [text, setText] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setText(json))
    return () => {
      ''
    };
  }, [resourceType]);

  // --------------------------------------------------

  // useState & useEffect for handling windows resize

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const setWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', setWidth)
    return () => {
      window.removeEventListener('resize', setWidth)
    }
  }, []);

  // ----------------------------------------------------

  return (
    <div className="Div">
      <div className="content" >

        <button className="Button" onClick={() => setResourceType('posts')}>Post</button>
        <button className="Button" onClick={() => setResourceType('users')}>Users</button>
        <button className="Button" onClick={() => setResourceType('comments')}>Comments</button>
        <h1>{resourceType}</h1>
        <div>
          {windowWidth}
        </div>
      </div>
    </div>
  );
}

export default App;
