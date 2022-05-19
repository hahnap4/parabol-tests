const { webkit, chromium, firefox } = require('playwright');


const getCustomExecutablePath = (expectedPath) => {
    const suffix = expectedPath.split('/.cache/ms-playwright/')[1];
    return  `/home/pwuser/.cache/ms-playwright/${suffix}`;
}

exports.handler = async (event, context) => {
    const browserName = event.browser || 'chromium';
    const extraLaunchArgs = event.browserArgs || [];
    const browserTypes = {
        'webkit': webkit,
        'chromium': chromium,
        'firefox': firefox
    };
    const browserLaunchArgs = {
        'webkit': [],
        'chromium': [
            '--single-process',
        ],
        'firefox': []
    }
    let browser = null;
}