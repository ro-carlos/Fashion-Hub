const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const fs = require("fs"); // Importa fs para leer archivos

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));

  // Lee el archivo de configuración según el ambiente
  const environment = config.env.envName || "local";
  const configFilePath = `cypress/config-files/${environment}.json`;

  // Verifica si el archivo existe y lo carga
  if (fs.existsSync(configFilePath)) {
    const envConfig = JSON.parse(fs.readFileSync(configFilePath, "utf-8"));
    config.env = { ...config.env, ...envConfig };
  } else {
    throw new Error(`Configuration file not found: ${configFilePath}`);
  }

  return config;
}

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  retries: 1,
  pageLoadTimeout: 10000,
  defaultCommandTimeout: 10000,
  requestTimeout: 10000,
  chromeWebSecurity: false,
  projectId: "ToBeDefined",
  video: false,

  blockHosts: [
    "*.fivetran.com",
    "*.google-analytics.com",
    "*.doubleclick.net",
    "*.hotjar.com",
    "*.googletagmanager.com",
    "*.adroll.com",
    "*.pnterest.com",
    "*.braze.com ",
    "*.smile.io",
    "*.sinter-collect.com",
    "*.bing.com",
    "*.clarity.ms",
    "*.sonobi.com",
    "discountoncart.com",
    "my.jst.ai",
  ],
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents,
    specPattern: "cypress/integration/*.feature",
  },
});
