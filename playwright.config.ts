import { defineConfig, devices } from '@playwright/test';

const isCI = !!process.env['CI'];

export default defineConfig({
	forbidOnly: isCI,
	fullyParallel: true,
	projects: [
		{
			name: 'Chrome',
			use: {
				...devices['Desktop Chrome'],
				channel: isCI ? 'chrome' : undefined,
				headless: true
			}
		},
		{
			name: 'Mobile Chrome',
			use: {
				...devices['Pixel 5'],
				channel: isCI ? 'chrome' : undefined,
				headless: true
			}
		}
	],
	reporter: 'list',
	testDir: './tests',
	testMatch: /.*\.test\.ts/,
	// The timeout for the accessibility tests only.
	timeout: 180 * 1_000,
	webServer: [
		{
			command: 'pnpm run preview:test',
			reuseExistingServer: !isCI,
			// The timeout of the single build step ran before the accessibility tests.
			timeout: 120 * 1_000,
			url: 'http://localhost:8787'
		}
	]
});
