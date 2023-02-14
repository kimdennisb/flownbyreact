import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [initialState, setInitialState] = useState({
    data: [],
    pages: 1,
    limit: 50,
  });

  const { limit } = initialState;

  useEffect(() => {
    async function fetchFromApi() {
      await fetch(`https://dummyapi.io/data/v1/post?limit=${limit}`, {
        method: "GET",
        headers: {
          "app-id": process.env.REACT_APP_APP_ID,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setInitialState((previousState) => ({
            ...previousState,
            data: res.data,
          }));
        });
    }

    fetchFromApi();
  }, [limit]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
