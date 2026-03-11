chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.runtime.onInstalled.addListener(() => {
  // This tells the extension: "When you open the sidebar, go straight to Google"
  chrome.sidePanel.setOptions({
    path: "https://inartaly.github.io/Browser-Extension-Icon-Resizer/",
    enabled: true,
  });
  // This opens the side panel immediately after installation
  console.log("Extension installed. Ready to resize icons!");
});
