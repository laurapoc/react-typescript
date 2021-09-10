interface ChildProps {
  color: string;
  onCLick: () => void;
}

export const Child = ({ color, onCLick }: ChildProps) => {
  return (
    <div>
      <h1>{color}</h1>
      <button onClick={onCLick}>Click me</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onCLick, children }) => {
  return (
    <div>
      <h1>{color}</h1>
      <h2>{children}</h2>
      <button onClick={onCLick}>Click me</button>
    </div>
  );
};
