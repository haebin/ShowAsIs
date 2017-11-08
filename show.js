//------------------------------------------------------------------------------------
// Web Part
//------------------------------------------------------------------------------------
// Init
addShowAsIs();
function addShowAsIs(evt) {
  //var showIcon = document.createElement("img");
  //showIcon.src = chrome.extension.getURL("show.png");

  var showButton = document.createElement("div");
  showButton.innerHTML = "Show As Is";
  showButton.className = "goog-inline-block jfk-button jfk-button-action docs-titlebar-button";
  showButton.addEventListener("click", showAsIs);
  var anchor = document.getElementsByClassName("punch-start-presentation-container")[0];
  document.getElementsByClassName("docs-titlebar-buttons")[0].insertBefore(showButton, anchor);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // don't care about input
    showAsIs();
  }
);



// Logic
function now(key) { return document.querySelector(key).style.display; } 
function off(key) { document.querySelector(key).style.display = "none"; }
function bg(key) { document.querySelector(key).style.backgroundColor = "#000000"; }
function del(key) { document.querySelector(key).remove(); }
 
function showAsIs() {
  if(now("#docs-chrome") == "none") { 
    location.reload(); 
  } else { 
    off("#docs-chrome"); off(".filmstrip"); 
    bg(".panel-right"); bg("#workspace-container"); 
    del("#speakernotes"); del("#speakernotes-dragger"); 

    // owner
    if(document.getElementById("punch-explore-widget")) {
      off("#punch-explore-widget");
      del(".punch-theme-sidebar"); del(".docs-explore-sidebar-title");
    } 
   
    // full screen
    chrome.runtime.sendMessage({cmd: "fullscreen"});
  } 
}

