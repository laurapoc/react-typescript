import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Parent from "./Parent";

describe("Parent", () => {
  it('renders Child component with the color text "red"', () => {
    const { getByText } = render(<Parent />);

    expect(getByText("red")).toBeInTheDocument();
  });

  it('renders children props with the text Children', () => {
    const { getByText } = render(<Parent />);

    expect(getByText("Children")).toBeInTheDocument()
  })
});
