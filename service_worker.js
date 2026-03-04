// Ensure the side panel opens on click
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

// Force the service worker to stay "alive" during the initial setup
chrome.runtime.onInstalled.addListener(() => {
  console.log("Android Messages Sidebar extension installed and rules active.");
});
