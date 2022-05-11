import { FullConfig } from '@playwright/test';

const admZip = require("adm-zip");

async function globalTeardown(config: FullConfig) {

console.log("Report path " + config.rootDir);

const reportPath = config.rootDir + "/playwright-report";
console.log("Report path: " + reportPath);

var zip = new admZip();
zip.addLocalFolder(reportPath, "./test-results");
zip.writeZip("./failedReports/report.zip");

}

export default globalTeardown;