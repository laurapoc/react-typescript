import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import GuestList from "./GuestList";

describe("GuestList", () => {
  it("renders correctly", () => {
    render(<GuestList />);

    expect(screen.getByText("Guest List:")).toBeInTheDocument();
  });

  it("renders button with the text Add Guest", () => {
    render(<GuestList />);

    expect(screen.getByText("Add Guest")).toBeInTheDocument();
  });

  it("allows enter name Laura into the input", () => {
    render(<GuestList />);
    const input: HTMLInputElement = screen.getByTestId("guest-name-input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Laura" } });

    expect(input.value).toBe("Laura");
  });

  it("adds name Laura into the guest list when button Add Guest is clicked and resets input value to an empty string", () => {
    render(<GuestList />);
    const input: HTMLInputElement = screen.getByTestId("guest-name-input") as HTMLInputElement;
    const button = screen.getByText("Add Guest");

    fireEvent.change(input, { target: { value: "Laura" } });
    fireEvent.click(button);

    expect(input.value).toBe("");
    expect(screen.getByText("Laura")).toBeInTheDocument();
  });
});
