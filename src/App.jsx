import { useState } from "react";
import axios from "axios"; // axios追加
import Title from "./components/Title";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [word, setWord] = useState("")

  // Unsplashからデータを受け取る関数
  const getPhotoData = () => {
    axios.get(
      "https://api.unsplash.com/search/photos?query=cat&client_id=3upG4lhXeUhpg5cynzAA2iAeBfhqe_OA-1Njox0krQQ")
        .then((res) => console.log(res));
  };
  return (
    <div className="App">
      <Title />
      <Form setWord={setWord} />
    </div>
  );
}

export default App;
