import GoalsCard from "./goals-card";
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

test("Renders goal card", () => {
  const { container, getByText } = render(<GoalsCard />);
  expect(getByText("2020 Goal")).toBeInTheDocument();
});
