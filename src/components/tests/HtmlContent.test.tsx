import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HtmlContent } from "../ui/HtmlContent";

describe("HtmlContent", () => {
  it("renders HTML content passed as a prop", () => {
    const htmlString = "<p>Hello, <strong>world!</strong></p>";
    render(<HtmlContent htmlString={htmlString} />);

    const container = screen.getByTestId("html-content");
    expect(container).toBeInTheDocument();
    expect(container.innerHTML).toBe(htmlString);
  });

  it("renders an empty container when htmlString is empty", () => {
    render(<HtmlContent htmlString="" />);

    const container = screen.getByTestId("html-content");
    expect(container).toBeInTheDocument();
    expect(container.innerHTML).toBe("");
  });

  it("applies the data-testId attribute correctly", () => {
    render(<HtmlContent htmlString="<div>Test</div>" />);

    const container = screen.getByTestId("html-content");
    expect(container).toHaveAttribute("data-testId", "html-content");
  });

  it("renders valid HTML elements correctly", () => {
    const htmlString = "<ul><li>Item 1</li><li>Item 2</li></ul>";
    render(<HtmlContent htmlString={htmlString} />);

    const container = screen.getByTestId("html-content");
    expect(container.querySelectorAll("li").length).toBe(2);
    expect(container.querySelector("li")?.textContent).toBe("Item 1");
  });

  it("does not escape HTML content", () => {
    const htmlString = '<script>alert("XSS")</script>';
    render(<HtmlContent htmlString={htmlString} />);

    const container = screen.getByTestId("html-content");
    expect(container.innerHTML).toBe(htmlString);
  });
});
