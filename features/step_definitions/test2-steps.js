'use strict';

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');

defineSupportCode(function({When, Then}) {

  When(/^I count Entersekt "([^"]*)"$/, function (searchQuery, next) {
    this.driver.get('http://www.entersekt.com/about');

    this.driver.findElement(By.xpath("//*[contains(text(),'Board Members')]"))
        .then(function() {
          next();
        });
  });

  Then(/^The result should be equal to 4$/, function (next) {
      this.driver.findElements(By.css("section#non-executive-team div.team_column"))
          .then(function(elements) {
        expect(elements.length).to.equal(4);
        next();
      });
  });

});
