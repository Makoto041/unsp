import { useState, useEffect } from "react";
import axios from "axios";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const [photo, setPhoto] = useState([]); // ← 追加
  const per_page = 30; // 取得する枚数 max 30
  const page = 10; // 取得するページ数 よくわからない

  const getPhotoData = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${word}&page=${page}&per_page=${per_page}&client_id=${
          import.meta.env.VITE_UNSPLASH_API_KEY
        }`
      )
      .then((res) => {
        setPhoto(res.data.results); // ← 追加
      });
  };

  return (
    <div className="App">
      <Title />
      <Form setWord={setWord} getPhotoData={getPhotoData} />
      <Results photo={photo} />
    </div>
  );
}

export default App;
