chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

// This listener modifies headers on the fly without needing a separate rules.json
chrome.declarativeNetRequest.updateDynamicRules({
  addRules: [{
    id: 1,
    priority: 1,
    action: {
      type: "modifyHeaders",
      responseHeaders: [
        { header: "x-frame-options", operation: "remove" },
        { header: "content-security-policy", operation: "remove" }
      ]
    },
    condition: {
      urlFilter: "https://messages.google.com/*",
      resourceTypes: ["sub_frame"]
    }
  }],
  removeRuleIds: [1]
});
