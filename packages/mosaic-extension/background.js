chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({
      url: chrome.extension.getURL('hello.html'),
      selected: true,
      height: 500,
      width: 500
    })
  })