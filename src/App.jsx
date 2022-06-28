import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
    });
  };

  const onClickUser1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1users</button>
    </div>
  );
}
