import ReactDOM from "react-dom";

import EventComponent from "./events/EventComponent";
import Parent from "./props/Parent";
import GuestList from "./state/guestList/GuestList";
// import UserSearch from "./state/userSearch/UserSearch";
import UserSearchClass from "./classes/UserSearchClass";
import UserSearch from "./refs/UserSearchref";

const App = () => {
  return (
    <div>
      <h1>Hi there</h1>
      <Parent />
      <GuestList />
      <UserSearch />
      <UserSearchClass
        users={[
          { name: "Sarah", age: 20 },
          { name: "Alex", age: 20 },
          { name: "Michael", age: 20 },
        ]}
      />
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
