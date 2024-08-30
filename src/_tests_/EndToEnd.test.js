import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 200,
      timeout: 0,
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  test('An event element is collapsed by default', async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    await page.waitForSelector('.event');

    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
    browser.close();
  });

  test('User can expand an event to see its details', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    await page.waitForSelector('.event');
    await page.click('.event .showDetailsButton');

    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeDefined();
    browser.close();
  });

  test('User can collapse an event to hide details', async () => {
    await page.click('.event .showDetailsButton');
    const eventDetails = await page.$('.event details');
    expect(eventDetails).toBeNull();
  });
});
