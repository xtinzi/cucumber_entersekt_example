# Automated Testing in JavaScript with Cucumber-JS and Selenium-Webdriver, using nodeJS

This is an example of automation using cucumber-js, selenium-webdriver and node-js to run browser automated tests on chrome.

The project has 2 tests that run on the entersekt/about page. The first test checks if Schalk Nolte is still the CEO of the company and the second test checks if the company still has 4 non executive board members.

If any scenarios fail, a screenshot will be taken as a PNG and put in ./screenshots/. After the tests are finished Cucumber shuts down the Webdriver instance.

## Running the tests on the desktop

To get going, you'll need Chrome (or Chromium) installed, and you'll also need the Chromedriver executable available on your path. You can get Chromedriver from [here](http://chromedriver.storage.googleapis.com/index.html) and then, in Linux, you can add the directory to your path like this:

    export PATH=$PATH:~/path/to/directory/containing/chromedriver
    OR create a symlink if this gives you problems: ln -s ~/path/to/directory/containing/chromedriver chromedriver
    
    

Verify it is working by typing 'chromedriver' in the terminal. You should see:

    [me@computer ~]$ chromedriver 
    Starting ChromeDriver (v2.10) on port 9515
    Only local connections are allowed.

then:

    git clone https://github.com/xtinzi/cucumber_entersekt_example.git
    cd cucumber_entersekt_example
    npm install
    npm test
