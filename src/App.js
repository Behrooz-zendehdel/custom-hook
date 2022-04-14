import "./App.css";
import React, { useState } from "react";

function App() {
  const [error, setError] = useState(null);
  const [loading, setLoding] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {loading && <p>loading ....</p>}
      {error && <p>{error}</p>}
      {user && <div>user loaded!</div>}
    </div>
  );
}

export default App;
