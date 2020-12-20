"use strict";

console.log("copy initialized");

browser.runtime.onMessage.addListener(request => {
  console.log("Received message from background");
  copyThat();
  return Promise.resolve({response: "Hi from content script"});
});

function copyThat() {
    console.log("copy that");
    var s = document.createElement('script');
    var protocol = '';
    if (location.protocol === 'https:') {
        protocol = 's';
    }

    s.setAttribute('src', 'http' + protocol + '://button.copymethat.com/static/js/bookmarklet.js?' + new Date().getTime());
    document.getElementsByTagName('body')[0].appendChild(s);
}

console.log("copy test");