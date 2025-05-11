import { act, renderHook } from "@testing-library/react";
import { useTheme as useThemeExternal } from "next-themes";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useTheme } from "@/modules/layout/hooks/useTheme"; // adjust the import path

vi.mock("next-themes", () => ({
  useTheme: vi.fn(),
}));

afterEach(() => {
  vi.clearAllMocks();
});

describe("useTheme", () => {
  it("should toggle theme from light to dark", () => {
    // Arrange
    const setThemeMock = vi.fn();
    vi.mocked(useThemeExternal).mockReturnValueOnce({
      theme: "light",
      setTheme: setThemeMock,
      themes: ["light", "dark"],
    });

    const { result } = renderHook(() => useTheme());

    // Act
    act(() => {
      result.current.toggleTheme();
    });

    // Assert
    expect(setThemeMock).toHaveBeenCalledWith("dark");
  });

  it("should toggle theme from dark to light", () => {
    // Arrange
    const setThemeMock = vi.fn();
    vi.mocked(useThemeExternal).mockReturnValueOnce({
      theme: "dark",
      setTheme: setThemeMock,
      themes: ["light", "dark"],
    });

    const { result } = renderHook(() => useTheme());

    // Act
    act(() => {
      result.current.toggleTheme();
    });

    // Assert
    expect(setThemeMock).toHaveBeenCalledWith("light");
  });
});
