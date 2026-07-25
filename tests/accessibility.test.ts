import { styleText } from "node:util";
import { expect, localURL, siteRoutes, test } from "./accessibility";

function formatImpact(impact: string | null | undefined) {
  if (!impact) {
    return "unknown";
  }

  const impactKey: Record<string, string> = {
    minor: styleText("blue", impact),
    moderate: styleText("yellowBright", impact),
    serious: styleText("yellow", impact),
    critical: styleText("red", impact),
  };

  return impactKey[impact] ?? impact;
}

for (const pathname of siteRoutes) {
  const pageURL = `${localURL}${pathname}`;
  const pageLabel = pathname === "/" ? "homepage" : pathname;

  test(`Testing for accessibility violations on ${pageLabel}.`, async ({
    page,
    makeAxeBuilder,
  }) => {
    const response = await page.goto(pageURL, { waitUntil: "networkidle" });
    expect(
      response,
      `Expected ${pageURL} to load successfully.`,
    ).not.toBeNull();
    expect(
      response?.ok(),
      `Expected ${pageURL} to return a successful response.`,
    ).toBeTruthy();

    const { violations } = await makeAxeBuilder().analyze();
    const reportMessage = `Found ${violations.length} accessibility violations on ${pageLabel}.`;

    if (violations.length === 0) {
      expect(violations, reportMessage).toHaveLength(0);
      return;
    }

    const violationLog = violations
      .map((violation, violationIndex) => {
        const nodes = violation.nodes
          .map(
            (node, nodeIndex) => `
${styleText("redBright", `  Node ${nodeIndex + 1} HTML:`)} ${node.html}
${styleText("redBright", `  Node ${nodeIndex + 1} CSS:`)} ${node.target.join(", ")}
${styleText("green", "  Suggested fix:")}
  ${node.failureSummary ?? "No failure summary provided."}`,
          )
          .join("\n");

        return `
${styleText(["redBright", "bold"], `Violation ${violationIndex + 1}:`)}
${styleText("redBright", "  Violation ID:")} ${violation.id}
${styleText("redBright", "  Violation Impact:")} ${formatImpact(violation.impact)}
${styleText("redBright", "  Violation Description:")} ${violation.help}
${styleText("redBright", "  More info:")} ${violation.helpUrl}
${nodes}`;
      })
      .join("\n\n");

    throw new Error(`${violationLog}\n\n${reportMessage}`);
  });
}
