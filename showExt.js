//------------------------------------------------------------------------------------
// Extension Part
//------------------------------------------------------------------------------------
chrome.browserAction.onClicked.addListener(function(tab) {
  if(tab.url.startsWith('https://docs.google.com/presentation')) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {cmd: "showAsIs"});
    });
  }
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, { state: "fullscreen" });
  }
);

