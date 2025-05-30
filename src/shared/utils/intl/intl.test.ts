import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { afterEach, describe, expect, it, vi } from "vitest";
import { routing } from "@/i18n/routing";
import { checkLocale } from "@/shared/utils/intl";

vi.mock("next/navigation", () => ({
  notFound: vi.fn(),
}));

vi.mock("next-intl", () => ({
  hasLocale: vi.fn(),
}));

afterEach(() => {
  vi.resetAllMocks();
});

describe("checkLocale", () => {
  it("should not call notFound if locale is valid", () => {
    // Arrange
    vi.mocked(hasLocale).mockReturnValueOnce(true);
    const validLocale = routing.locales[0];

    // Act
    checkLocale(validLocale);

    // Assert
    expect(notFound).not.toHaveBeenCalled();
  });

  it("should call notFound if locale is invalid", () => {
    // Arrange
    vi.mocked(hasLocale).mockReturnValueOnce(false);
    const invalidLocale = "invalid";

    // Act
    checkLocale(invalidLocale);

    // Assert
    expect(notFound).toHaveBeenCalled();
  });
});
