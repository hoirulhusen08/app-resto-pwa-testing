const assert = require('assert');

Feature('Liking Resto');
 
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
 
Scenario('Liking one resto', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.view-content p');
 
  I.amOnPage('/');
 
  I.seeElement('.title-resto a');
 
  const firstResto = locate('.title-resto a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
 
  I.seeElement('#likeButton');
  I.click('#likeButton');
 
  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedRestoTitle = await I.grabTextFrom('.title-resto a');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});