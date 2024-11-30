import { useState } from "react";
import axios from "axios"; // axios追加
import Title from "./components/Title";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [word, setWord] = useState("")

  // Unsplashからデータを受け取る関数
  
  return (
    <div className="App">
      <Title />
      <Form setWord={setWord} />
    </div>
  );
}

export default App;
