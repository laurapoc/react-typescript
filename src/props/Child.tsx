interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  return (
    <div>
      <h1>{color}</h1>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
