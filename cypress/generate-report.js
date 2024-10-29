const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/CucumberReports/",
  reportPath: "cypress/CucumberReports/cucumber-report.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "15",
    },
    device: "Local test machine",
    platform: {
      name: "Mac OS",
      version: "Sonoma 14.1",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Fashion Hub" },
      { label: "Release", value: "1.0.0" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Oct 29th 2024, 18:00 PM CET" },
      { label: "Execution End Time", value: "Oct 29th 2024, 15:00 PM CET" },
    ],
  },
});
