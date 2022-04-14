import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [error, setError] = useState(null);
  const [loading, setLoding] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setLoding(true);
    setUser(null);
    setError(null);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setLoding(false);
        setUser(res.data);
      })
      .catch((err) => {
        setLoding(false);
        setError(err.message);
      });
  }, []);

  return (
    <div className="App">
      {loading && <p>loading ....</p>}
      {error && <p>{error}</p>}
      {user && (
        <div>
          {user.map((user) => (
            <li>{user.name}</li>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
