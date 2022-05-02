import { useState } from "react";

export default function App() {
  const [value, setvalue] = useState([]);
  const [num, setnum] = useState(1);
  function fun1() {
    setnum(num + 1);
    setvalue((old) => [...old, num]);
  }
  function clr() {
    setvalue([]);
    setnum(1);
  }
  return (
    <div className="App">
      <button onClick={fun1}>first</button>
      <button onClick={clr}>sec</button>
      <div>
        {value.map((el) => (
          <div>{value.filter((e) => e < el).toString()}</div>
        ))}
      </div>
    </div>
  );
}
