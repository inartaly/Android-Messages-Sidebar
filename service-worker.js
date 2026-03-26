// 1. Persistent event: ensures the service worker always wakes
chrome.action.onClicked.addListener(() => {
  chrome.sidePanel.open({ windowId: chrome.windows.WINDOW_ID_CURRENT });
});

// 2. Optional: keep default behavior (icon opens panel)
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

// 3. Register the global panel path on install/update
chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setOptions({
    path: 'https://messages.google.com/web/',
    enabled: true
  });

  console.log("Android Messages Sidebar installed and ready!");
});
