import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import UserSearch from "./UserSearch";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

beforeEach(() => {
  render(<UserSearch />);
});

describe("UserSearch", () => {
  it("renders correctly", () => {
    expect(screen.getByText("User Search:")).toBeInTheDocument();
  });

  it("renders button with the text Find User", () => {
    expect(screen.getByText("Find User")).toBeInTheDocument();
  });

  it("allows enter name Sarah into the input", () => {
    const searchInput: HTMLInputElement = screen.getAllByTestId("user_search-input")[0] as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "Sarah" } });

    expect(searchInput.value).toBe("Sarah");
  });

  it("finds and outputs name Alex and his age of 20 when button Find User is clicked", () => {
    const searchInput: HTMLInputElement = screen.getAllByTestId("user_search-input")[0] as HTMLInputElement;
    const findButton = screen.getByText("Find User");
    fireEvent.change(searchInput, { target: { value: users[1].name } });
    fireEvent.click(findButton);

    expect(screen.getByText("Alex20")).toBeInTheDocument();
  });
});
