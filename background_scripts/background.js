"use strict";

function onError(error) {
    console.error(`Error: ${error}`);
}

function sendCopy(tabs) {
    console.log("sendCopy");
    for (let tab of tabs) {
        browser.tabs.sendMessage(
            tab.id, "copy_that"
        ).then(response => {
            console.log("response: ", response.response);
        });
    }
}


console.log("test");
browser.browserAction.onClicked.addListener(() => {
    console.log("onClicked");
    browser.tabs.query({
        currentWindow: true,
        active: true,
    }).then(sendCopy).catch(onError);
});