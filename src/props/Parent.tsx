import { ChildAsFC } from "./Child";

const Parent = () => {
  return <ChildAsFC color="red" onCLick={() => console.log("Clicked")}>Children</ChildAsFC>;
};

export default Parent;
