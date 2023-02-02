import { useEffect, useState } from "react";
import Comments from "./Components/Comments";
import Post from "./Components/Post";
import Users from "./Components/Users";

function App() {
  const [resourceType, setResourceType] = useState(<Post />);

  useEffect(() => {
    console.log('Effect Rendered')
    return () => {
      console.log('Effect RenderCleaned Up')
    };
  }, [resourceType]);

  return (
    <div className="Div">
      <div className="content" >

        <button className="Button" onClick={() => setResourceType(<Post />)}>Post</button>
        <button className="Button" onClick={() => setResourceType(<Users />)}>Users</button>
        <button className="Button" onClick={() => setResourceType(<Comments />)}>Comments</button>
        <h1>{resourceType}</h1>
      </div>
    </div>
  );
}

export default App;
