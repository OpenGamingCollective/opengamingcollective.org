import { access, mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const governanceSourceUrl =
  "https://raw.githubusercontent.com/OpenGamingCollective/organization-governance/main/governance.md";

const targetUrl = new URL("../src/content/governance/index.md", import.meta.url);
const targetPath = fileURLToPath(targetUrl);
const targetDirPath = fileURLToPath(new URL("../src/content/governance/", import.meta.url));

const formatMarkdown = (rawMarkdown) =>
  `---\n---\n\n${
    rawMarkdown
      .replace(/^>\[name=.*$/gm, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  }\n`;

try {
  const response = await fetch(governanceSourceUrl);

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const rawMarkdown = await response.text();
  const cleanedMarkdown = formatMarkdown(rawMarkdown);

  await mkdir(targetDirPath, { recursive: true });
  await writeFile(targetPath, cleanedMarkdown, "utf8");

  console.log(`Synced governance snapshot to ${targetPath}`);
} catch (error) {
  try {
    await access(targetPath);
    console.warn(
      `Governance sync failed (${error instanceof Error ? error.message : error}). Using existing snapshot at ${targetPath}.`
    );
  } catch {
    throw new Error(
      `Governance sync failed and no local snapshot exists at ${targetPath}: ${
        error instanceof Error ? error.message : error
      }`
    );
  }
}
