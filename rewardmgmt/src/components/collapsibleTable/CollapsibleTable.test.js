import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import CollapsibleTable from "./CollapsibleTable";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("can render the reward summary table", () => {
  // Test first render and componentDidMount
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    ReactDOM.createRoot(container).render(<CollapsibleTable />);
  });

  const tableHeader = container.querySelector("th");
  expect(tableHeader.textContent).toBe("Reward Summary");
});
