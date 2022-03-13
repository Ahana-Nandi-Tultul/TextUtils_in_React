import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const[alert, setAlert] =useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor='rgb(4 48 98)';
      showAlert('Dark Mode has been enabled', 'success');
      document.title="TextUtils- Dark Mode";
      // setInterval(() => {
      //   document.title="TextUtils is amazing node";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextUtils Now";
      // }, 1500);
      
    } else {
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert('Light Mode has been enabled', 'success');
      document.title="TextUtils- Light Mode";
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
      <Alert alert={alert}/>
      <div className="container">
        {/* <About /> */}
        <TextForm heading="Enter your text" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}
export default App;
