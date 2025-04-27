import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { Navbar } from ".";
import { usePathname } from "next/navigation";

const navItems = [
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
    render(<Navbar navItems={navItems} />);

    // Assert
    navItems.forEach((item) => {
      expect(screen.getByRole("link", { name: item.name })).toBeInTheDocument();
    });
  });

  it("should apply underline to the active link", () => {
    // Arrange
    vi.mocked(usePathname).mockReturnValue("/blog");

    // Act
    render(<Navbar navItems={navItems} />);

    // Assert
    const blogUnderline = screen.getByTestId("navbar-underline-blog");
    expect(blogUnderline).toBeInTheDocument();
  });

  it("should not apply underline to inactive links", () => {
    // Arrange
    vi.mocked(usePathname).mockReturnValue("/blog");

    // Act
    render(<Navbar navItems={navItems} />);

    // Assert
    const homeUnderline = screen.queryByTestId("navbar-underline-home");
    expect(homeUnderline).not.toBeInTheDocument();
  });
});
