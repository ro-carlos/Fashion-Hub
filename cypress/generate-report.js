const fs = require("fs");
const path = require("path");
const os = require("os");
const report = require("multiple-cucumber-html-reporter");

const envDataPath = path.join(__dirname, "./config-files/envData.json");
const ndjsonPath = path.join(__dirname, "../cucumber-messages.ndjson");

let envData = {};
if (fs.existsSync(envDataPath)) {
  envData = JSON.parse(fs.readFileSync(envDataPath, "utf-8"));
}

let startTime, endTime;

// Extract start and end times from the ndjson file
if (fs.existsSync(ndjsonPath)) {
  const lines = fs
    .readFileSync(ndjsonPath, "utf-8")
    .split("\n")
    .filter(Boolean)
    .map(JSON.parse);

  const startTimestamp = lines.find((entry) => entry.testRunStarted)
    ?.testRunStarted?.timestamp;
  if (startTimestamp) {
    startTime = new Date(
      startTimestamp.seconds * 1000 +
        Math.floor(startTimestamp.nanos / 1000000),
    );
  }

  const endTimestamp = lines.reverse().find((entry) => entry.testCaseFinished)
    ?.testCaseFinished?.timestamp;
  if (endTimestamp) {
    endTime = new Date(
      endTimestamp.seconds * 1000 + Math.floor(endTimestamp.nanos / 1000000),
    );
  }
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

const executionStartTime = startTime
  ? formatDateWithMilliseconds(startTime)
  : "Not Set";
const executionEndTime = endTime
  ? formatDateWithMilliseconds(endTime)
  : "Not Set";
const totalExecutionTimeFormatted =
  startTime && endTime ? formatExecutionTime(endTime - startTime) : "Not Set";

report.generate({
  jsonDir: "./cypress/cucumberReports/",
  reportPath: "cypress/cucumberReports/cucumber-report.html",
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
      { label: "Execution Start Time", value: executionStartTime },
      { label: "Execution End Time", value: executionEndTime },
      { label: "Total Execution Time", value: totalExecutionTimeFormatted },
      { label: "Environment", value: envData.environment || "local" },
      { label: "Machine", value: os.platform() },
    ],
  },
});
