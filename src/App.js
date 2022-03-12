import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor='rgb(4 48 98)';
    } else {
      setMode("light");
      document.body.style.backgroundColor='white';
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container">
        {/* <About /> */}
        <TextForm heading="Enter your text" mode={mode} />
      </div>
    </>
  );
}
export default App;
