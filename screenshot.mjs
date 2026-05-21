import { chromium } from '@playwright/test';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });

// Hero
await page.screenshot({ path: '/tmp/s_hero.png' });

// About
await page.evaluate(() => window.scrollTo({ top: document.querySelector('#about').offsetTop - 60 }));
await new Promise(r => setTimeout(r, 400));
await page.screenshot({ path: '/tmp/s_about.png' });

// Skills
await page.evaluate(() => window.scrollTo({ top: document.querySelector('#skills').offsetTop - 60 }));
await new Promise(r => setTimeout(r, 400));
await page.screenshot({ path: '/tmp/s_skills.png' });

// Experience
await page.evaluate(() => window.scrollTo({ top: document.querySelector('#experience').offsetTop - 60 }));
await new Promise(r => setTimeout(r, 400));
await page.screenshot({ path: '/tmp/s_exp.png' });

// Education
await page.evaluate(() => window.scrollTo({ top: document.querySelector('#education').offsetTop - 60 }));
await new Promise(r => setTimeout(r, 400));
await page.screenshot({ path: '/tmp/s_edu.png' });

// Contact
await page.evaluate(() => window.scrollTo({ top: document.querySelector('#contact').offsetTop - 60 }));
await new Promise(r => setTimeout(r, 400));
await page.screenshot({ path: '/tmp/s_contact.png' });

await browser.close();
console.log('done');
