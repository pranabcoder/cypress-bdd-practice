const report = require("multiple-cucumber-html-reporter");
const os = require('os');

report.generate({
  jsonDir: "cypress/reports/cucumber-json/",
  reportPath: "cypress/reports/html-multi-report/",
  ignoreBadJsonFile: true,
  displayReportTime: true,
  displayDuration: true,

  metadata: {
    device: os.hostname(),
    platform: { name: os.type(), version: os.release() },
  },
});
