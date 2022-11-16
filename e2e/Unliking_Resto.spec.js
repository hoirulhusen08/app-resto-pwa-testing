const assert = require('assert');

Feature('Unliking Resto');
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
Scenario('Showing empty liked menu resto', ({ I }) => {
  I.dontSeeElement('.title-resto a');
});

Scenario('Unliking one resto', async ({ I }) => {
  I.seeElement('.text-content');
  I.amOnPage('/');
  I.seeElement('.title-resto a');

  const firstResto = locate('.title-resto a').first();
  const firstRestosTitles = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');

  const unlikedRestosTitles = await I.grabTextFrom('.title-resto a');
  assert.strictEqual(firstRestosTitles, unlikedRestosTitles);

  I.seeElement('.title-resto a');
  await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.card');
});