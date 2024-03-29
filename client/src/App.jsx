import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("HomePage Loaded");
  }, []);

  return (
    <>
      <h1>Golu Page</h1>

      <div className="flex justify-center items-center h-[30vh] mx-auto mt-[20vh] w-[20vw] bg-blue-500">
        <Link to="/chat" className="font-bold text-white text-2xl block">
          chatpage
        </Link>
      </div>
    </>
  );
}

export default App;
