import ActiveUsersCard from "./active-users-card";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

test("Renders active users card", () => {
  const { container, getByText } = render(<ActiveUsersCard />);
  expect(getByText("Active users right now")).toBeInTheDocument();
  expect(
    getByText("Update your payout method in Settings")
  ).toBeInTheDocument();
  expect(getByText("Sales")).toBeInTheDocument();
  expect(getByText("Items")).toBeInTheDocument();
});
