let canRunStart = true;

var motivationVideosList = ["https://www.youtube.com/watch?v=KxGRhd_iWuE", // Never give up
"https://www.youtube.com/watch?v=AlLhMySQTlo", // Sunset
"https://www.youtube.com/watch?v=iEIqVq7EZqE", // Are you just living day to day?
]; 
var rand = Math.floor(Math.random() * motivationVideosList.length);
var rValue = motivationVideosList[rand];

// Start another tab function
async function start() {
  if (canRunStart) {
    canRunStart = false;

    const current = await chrome.windows.getCurrent();
    const allTabs = await chrome.tabs.query({});

    var rand = Math.floor(Math.random() * motivationVideosList.length);
    let creation = chrome.tabs.create({
      url: motivationVideosList[rand]
    });

    // Wait
    setTimeout(() => {
      canRunStart = true;
    }, 5000);
  }
}

chrome.action.onClicked.addListener(start);
chrome.tabs.onCreated.addListener(start);