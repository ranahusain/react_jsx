import { list } from "postcss";

const name = "Hussain";
const x = 5;
const y = 10;
const names = ["Hussain", "Qadeer", "Hadi"];
const loggedIn = true;
const login = true;
const styles = {
  color: "blue",
  fontSize: "25px",
};

function App() {
  return (
    <>
      <div className="text-5xl">Tailwind is working!</div>
      <p style={{ color: "red" }}>Hello!</p>
      <p style={styles}>Another method of adding styles</p>
      <p>My name is {name}</p>
      <p>
        The sum of {x} and y {y} is {x + y}
      </p>

      {/* this will show a error in inspect becuase it requires a key value */}
      {/* <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul> */}

      {/* here is the correct way to do so without error  */}
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn ? <h1>Logged in is True</h1> : <h1>Logged in is False</h1>}
      {login && <h1>Logged in using when not needing an else</h1>}
    </>
  );
}

export default App;
