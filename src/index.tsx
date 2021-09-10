import ReactDOM from "react-dom";
import Parent from "./props/Parent";
import GuestList from "./state/guestList/GuestList";

const App = () => {
  return (
    <div>
      <h1>Hi there</h1>
      <Parent />
      <GuestList />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
