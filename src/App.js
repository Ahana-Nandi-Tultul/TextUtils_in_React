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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nihil expedita ut doloribus aut reiciendis iusto laudantium rem! Fugiat nihil quaerat nemo sequi quia nobis. Corporis sequi culpa enim deserunt.
            hi
          </p>
        </div>
      </nav>
    </>
  );
}

export default App;
