const puppeteer = require("puppeteer");

// ScreenShoot Website

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("https://example.com");
//   await page.screenshot({ path: "example.png" });

//   await browser.close();
// })();

// Get Content on page

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("https://example.com");
//   const element = await page.waitForSelector("h1"); // select the element
//   const value = await element.evaluate((el) => el.textContent);
//   console.log(value);
// })();

//Click URL and then get the content inside the href

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");
  await page.click("a");
  await page.screenshot({ path: "example.png" });
  await browser.close();
})();
