import IncomeCard from "./income-card";
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

test("Renders income card with withdrawal button", () => {
  const { container, getByText } = render(<IncomeCard />);
  expect(getByText("Income")).toBeInTheDocument();
  expect(getByText("Withdraw Button")).toBeInTheDocument();
});
