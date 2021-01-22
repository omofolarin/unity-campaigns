import UsersCard from "./users-card";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

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

test("Renders income title and text link to settings", () => {
  const { container, getByText } = render(<UsersCard />);
  expect(getByText("New Users")).toBeInTheDocument();
  expect(getByText("Go to settings")).toBeInTheDocument();
});
