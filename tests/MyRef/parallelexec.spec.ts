const { chromium, firefox, webkit } = require('playwright');

(async () => {
  const [browserChromium, browserFirefox, browserWebkit] = await Promise.all([
    chromium.launch({ headless: false }),
    firefox.launch({ headless: false }),
    webkit.launch({ headless: false })
  ]);

  try {
    const [pageChromium, pageFirefox, pageWebkit] = await Promise.all([
      browserChromium.newPage(),
      browserFirefox.newPage(),
      browserWebkit.newPage()
    ]);

    await Promise.all([
      pageChromium.goto('https://www.google.com/'),
      pageChromium.waitForLoadState('networkidle'), // Wait for network idle to ensure the page is fully loaded
      pageFirefox.goto('https://www.google.com/'),
      pageWebkit.goto('https://www.google.com/')

    ]);

    console.log('Navigation successful in all browsers!');

  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await Promise.all([
      browserChromium.close(),
      browserFirefox.close(),
      browserWebkit.close()
    ]);
    console.log('All browsers closed.');
  }
})();