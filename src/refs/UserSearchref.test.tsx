import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import UserSearchref from "./UserSearchref";

beforeEach(() => {
  render(<UserSearchref />);
});

describe("UserSearch", () => {
  it("renders correctly", () => {
    expect(screen.getByText("User Search with focus:")).toBeInTheDocument();
  });

  it("focuses on input on every render", () => {
    const input = screen.getByTestId("focused-input");
    fireEvent.focus(input)

    expect(input).toHaveFocus()
  });
});
