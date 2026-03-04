chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.runtime.onInstalled.addListener(() => {
  // This tells the extension: "When you open the sidebar, go straight to Google"
  chrome.sidePanel.setOptions({
    path: 'https://messages.google.com/web/authentication',
    enabled: true
  });
});
