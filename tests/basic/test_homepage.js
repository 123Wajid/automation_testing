module.exports = {
    "Verify HomePage" : function(browser){
        browser
        .url('https://mldev-01.mrlube.com/')
        .waitForElementVisible('body')
        .windowMaximize()
        .pause(5000)
        .waitForElementVisible('#cookiescript_accept')
        .click('#cookiescript_accept')
        .end()
    }
}