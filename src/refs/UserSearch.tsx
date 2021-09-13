import { useState, useRef, useEffect } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onclick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <>
      <h1>User Search:</h1>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onclick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </>
  );
};

export default UserSearch;
