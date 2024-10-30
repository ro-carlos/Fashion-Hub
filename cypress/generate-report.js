const fs = require("fs");
const path = require("path");
const os = require("os");
const report = require("multiple-cucumber-html-reporter");

const envDataPath = path.join(__dirname, "./config-files/envData.json");
let envData = {};

if (fs.existsSync(envDataPath)) {
  envData = JSON.parse(fs.readFileSync(envDataPath, "utf-8"));
}

function formatDateWithMilliseconds(date) {
  return `${date.toLocaleString("en-GB", {
    timeZone: "CET",
  })}.${date.getMilliseconds()}Z`;
}

function formatExecutionTime(milliseconds) {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const ms = milliseconds % 1000;
  return `${minutes}m ${seconds}s ${ms}ms`;
}

const startTime = new Date(envData.startTime);
const endTime = new Date();
const executionStartTime = formatDateWithMilliseconds(startTime);
const executionEndTime = formatDateWithMilliseconds(endTime);
const totalExecutionTimeMs = endTime - startTime;
const totalExecutionTimeFormatted = formatExecutionTime(totalExecutionTimeMs);

report.generate({
  jsonDir: "./cypress/CucumberReports/",
  reportPath: "cypress/CucumberReports/cucumber-report.html",
  metadata: {
    browser: {
      name: envData.browser || "chrome",
      version: process.env.BROWSER_VERSION || "latest",
    },
    device: os.hostname(),
    platform: { name: os.platform(), version: os.release() },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Fashion Hub" },
      { label: "Execution Start Time", value: executionStartTime || "Not Set" },
      { label: "Execution End Time", value: executionEndTime },
      { label: "Total Execution Time", value: totalExecutionTimeFormatted },
      { label: "Environment", value: envData.environment || "local" },
      { label: "Machine", value: os.platform() },
    ],
  },
});
