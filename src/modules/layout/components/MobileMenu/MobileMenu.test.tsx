import { cleanup, fireEvent, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MobileMenu } from "@/modules/layout/components/MobileMenu";

const mockNavItems = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

afterEach(() => {
  vi.resetAllMocks();
  cleanup();
});

describe("MobileMenu", () => {
  it("should render menu button", () => {
    // Act
    render(<MobileMenu navItems={mockNavItems} />);

    // Assert
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
  });

  it("should open the menu when clicking the button", async () => {
    // Act
    render(<MobileMenu navItems={mockNavItems} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Assert
    mockNavItems.forEach((item) => {
      expect(screen.getByRole("link", { name: item.name })).toBeInTheDocument();
    });
  });

  it("should close the menu when clicking the button twice", async () => {
    // Act
    render(<MobileMenu navItems={mockNavItems} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    fireEvent.click(button);

    // Assert
    waitForElementToBeRemoved(screen.getByRole("navigation"));
  });

  it("should close the menu when clicking a link", () => {
    // Act
    render(<MobileMenu navItems={mockNavItems} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const homeLink = screen.getByText("Home");
    fireEvent.click(homeLink);

    // Assert
    waitForElementToBeRemoved(screen.getByRole("navigation"));
  });
});
