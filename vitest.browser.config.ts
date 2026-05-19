import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	test: {
		include: ['**/*.browser-test.?(c|m)[jt]s?(x)'],
		browser: {
			enabled: true,
			provider: playwright(),
			// https://vitest.dev/config/browser/playwright
			instances: [{ browser: 'chromium' }],
		},
	},
});
