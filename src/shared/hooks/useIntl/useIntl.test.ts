import { beforeEach, describe, it, expect, vi } from "vitest";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { checkLocale } from "@/shared/hooks/useIntl";
import { routing } from "@/i18n/routing";

vi.mock("next/navigation", () => ({
  notFound: vi.fn(),
}));

vi.mock("next-intl", () => ({
  hasLocale: vi.fn(),
}));

beforeEach(() => {
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
