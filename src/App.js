import logo from "./logo.svg";
import "./App.css";

let name ="Ahana";
function App() {
  return (
    <>
      <nav>
        <li>Home </li>
        <li>About</li>
        <li>Contact</li>
        <div className="container">
          <h1>Hello {name}</h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          excepturi dolores unde consectetur quisquam eius dolorem voluptatum
          modi eveniet voluptas nihil sapiente voluptate rerum quaerat, quia
          culpa accusamus doloremque similique nostrum! Praesentium, ullam
          accusamus nemo hic tempore consectetur exercitationem velit animi enim
          nisi aliquid natus.
        </div>
      </nav>
    </>
  );
}

export default App;
