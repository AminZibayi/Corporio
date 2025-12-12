const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  retries: process.env.CI ? 2 : 0,
  timeout: 60000,
  reporter: "list",
  use: {
    baseURL: "http://localhost:1313",
    headless: true,
  },
  webServer: {
    command: "pnpm start -- --port 1313 --baseURL=http://localhost:1313",
    url: "http://localhost:1313",
    reuseExistingServer: !process.env.CI,
    stdout: "pipe",
    stderr: "pipe",
    timeout: 120000,
  },
});
