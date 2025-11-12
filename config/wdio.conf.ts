exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  hostname: "hub.browserstack.com",
  specs: ["test/testAppGenerico.spec.ts"],
  services: [
    [
      "browserstack",
      {
        app: "bs://4e1a52f31f43b4ffc008a7eb5721d4795da606d9",
        browserstackLocal: true,
        accessibility: false,
        testObservabilityOptions: {
          buildName: "bstack-demo",
          projectName: "BrowserStack Sample",
          buildTag: 'Any build tag goes here. For e.g. ["Tag1","Tag2"]',
        },
      },
    ],
  ],
  capabilities: [
    /*Capabilities	Dove metterle
     platformName, deviceName, platformVersion	senza prefisso appium:
     Tutte le altre Appium (noReset, appPackage, ecc.)	con prefisso appium:
     Tutte le opzioni BrowserStack	dentro "bstack:options" */
    {
      platformName: "android",
      "appium:noReset": false,
      "appium:automationName": "UiAutomator2",

      // 👇 Niente 'app' qui, perché l’app è già installata
      "appium:newCommandTimeout": 3600,
      "appium:connectHardwareKeyboard": true,
      "appium:autoGrantPermissions": true,

      // 👇 Capabilities specifiche per questo device
      "bstack:options": {
        deviceName: "Samsung Galaxy S22 Ultra",
        osVersion: "12.0",
        projectName: "BrowserStack Sample",
        buildName: "bstack-demo",
      },
    },
    {
      "bstack:options": {
        deviceName: "Google Pixel 7 Pro",
        platformVersion: "13.0",
        platformName: "android",
      },
    },
    {
      "bstack:options": {
        deviceName: "OnePlus 9",
        platformVersion: "11.0",
        platformName: "android",
      },
    },
  ],
  commonCapabilities: {
    "bstack:options": {
      debug: true,
      networkLogs: true,
      percy: false,
      percyCaptureMode: "auto",
    },
  },
  maxInstances: 10,
};
