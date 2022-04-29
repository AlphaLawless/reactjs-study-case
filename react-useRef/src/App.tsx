import { useRef, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function focus() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={focus}>focus</button>
    </>
  );
}

export default App;
