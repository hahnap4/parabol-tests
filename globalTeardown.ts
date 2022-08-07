import { FullConfig } from '@playwright/test';

const admZip = require("adm-zip");

async function globalTeardown(config: FullConfig) {

if ( process.env.CI === 'false' ) {

console.log("Report path " + config.rootDir);

const reportPath = config.rootDir + "/playwright-report";
console.log("Report path: " + reportPath);

var zip = new admZip();
zip.addLocalFolder(reportPath, "./test-results");
zip.writeZip("./failedReports/report.zip");

}
else {
    close();
}
}

export default globalTeardown;