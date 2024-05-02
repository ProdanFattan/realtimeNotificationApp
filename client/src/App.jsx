import { useState } from "react";
import "./App.css";
function App() {
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  console.log(user);
  return (
    <>
      <div className="container">
        <div className="login">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setUser(username)}>Login</button>
        </div>
      </div>
    </>
  );
}

export default App;
