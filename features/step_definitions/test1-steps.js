'use strict';

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');

defineSupportCode(function({When, Then}) {

    When(/^I search Entersekt for "([^"]*)"$/, function (searchQuery, next) {
        this.driver.get('http://www.entersekt.com/about');
        this.driver.findElement(By.xpath("//h3[contains(text(),'Schalk Nolte')]"))
            .then(function(position) {
                next();
            });
    });

    Then(/^I should find out his position$/, function (next) {
        this.driver.findElement(By.xpath("//*[contains(text(),'Schalk Nolte')]"))
            .findElement(By.xpath("following-sibling::div[@class='position'][contains(text(),'CEO')]"))
            .getText()
            .then(function(position) {
                expect(position).contains("CEO");
                next();
            });
    });
});