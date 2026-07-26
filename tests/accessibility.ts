import AxeBuilder from "@axe-core/playwright";
import { test as base } from "@playwright/test";

type AxeFixture = {
  makeAxeBuilder: () => AxeBuilder;
};

export const localURL = "http://localhost:8787";

// Keep this list explicit because the site does not generate a sitemap.
export const siteRoutes = ["/", "/governance/"] as const;

export const test = base.extend<AxeFixture>({
  makeAxeBuilder: async ({ page }, use) => {
    const makeAxeBuilder = () =>
      new AxeBuilder({ page }).withTags([
        "wcag2a",
        "wcag21a",
        "wcag2aa",
        "wcag21aa",
        "wcag22aa",
        "best-practice",
      ]);

    await use(makeAxeBuilder);
  },
});

export { expect } from "@playwright/test";
