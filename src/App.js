import { useEffect, useState } from "react";
import Posts from "./Components/Posts";
import LimitInput from "./Components/LimitInput";
import "./App.css";

function App() {
  const [initialState, setinitialState] = useState({
    data: [],
    page: 1,
    postsperpage: 5,
    pages: 1,
    limit: 50,
  });

  const { limit, data } = initialState;

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
          setinitialState((previousState) => {
            return {
              ...previousState,
              data: res.data,
            };
          });
        });
    }

    fetchFromApi();
  }, [limit]);

  return (
    <div className="App">
      <header className="App-header">
        <LimitInput />
      </header>
      <section>{data.length > 0 ? <Posts posts={data} /> : null}</section>
    </div>
  );
}

export default App;
