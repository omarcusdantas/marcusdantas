import { usePathname } from "next/navigation";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Navbar } from ".";

const mockNavItems = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}));

afterEach(() => {
  vi.resetAllMocks();
  cleanup();
});

describe("Navbar", () => {
  it("should render all navigation links", () => {
    // Arrange
    vi.mocked(usePathname).mockReturnValueOnce("/");

    // Act
    render(<Navbar navItems={mockNavItems} />);

    // Assert
    mockNavItems.forEach((item) => {
      expect(screen.getByRole("link", { name: item.name })).toBeInTheDocument();
    });
  });

  it("should apply underline to the active link", () => {
    // Arrange
    vi.mocked(usePathname).mockReturnValue("/blog");

    // Act
    render(<Navbar navItems={mockNavItems} />);

    // Assert
    const blogUnderline = screen.getByTestId("navbar-underline-blog");
    expect(blogUnderline).toBeInTheDocument();
  });

  it("should not apply underline to inactive links", () => {
    // Arrange
    vi.mocked(usePathname).mockReturnValue("/blog");

    // Act
    render(<Navbar navItems={mockNavItems} />);

    // Assert
    const homeUnderline = screen.queryByTestId("navbar-underline-home");
    expect(homeUnderline).not.toBeInTheDocument();
  });
});
