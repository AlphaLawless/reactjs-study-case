import { useState } from "react";
import "./App.css";
import Table from "./Table";
import { Users } from "./users";

function App() {
  const [query, setQuery] = useState("");

  // Good Code ✅
  type UserKey = keyof IUserData;
  const keys: UserKey[] = ["first_name", "last_name", "email"];

  const search = (data: IUserData[]) =>
    data.filter((item) =>
      keys.some((key) => item[key]?.toString().toLowerCase().includes(query))
    );

  // Bad code ❌
  // const search = (data: UserData) => {
  // const result = data.filter(
  // (item) =>
  // item.first_name.toLowerCase().includes(query) ||
  // item.last_name.toLowerCase().includes(query) ||
  // item.email.toLowerCase().includes(query) ||
  // item.id.toString().includes(query)
  // );

  // return result;
  // };

  const filteredList = search(Users);

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={filteredList} />
    </div>
  );
}

export default App;
