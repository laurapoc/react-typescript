import ReactDOM from "react-dom";

import EventComponent from "./events/EventComponent";
import Parent from "./props/Parent";
import GuestList from "./state/guestList/GuestList";
import UserSearch from "./state/guestList/userSearch/UserSearch";

const App = () => {
  return (
    <div>
      <h1>Hi there</h1>
      <Parent />
      <GuestList />
      <UserSearch />
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
