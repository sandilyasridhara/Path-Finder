// Add this file to your extension
chrome.runtime.onInstalled.addListener(() => {
  // This will prompt the user to enter their API key on first install
  chrome.storage.sync.get(["geminiApiKey"], (result) => {
    if (!result.geminiApiKey) {
      chrome.tabs.create({
        url: "options.html",
      });
    }
  });
});

//On install, prompt user to enter API key
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(["geminiApiKey"], (result) => {
    if (!result.geminiApiKey) {
      chrome.tabs.create({ url: "options.html" });
    }
  });
});

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getGeminiKey") {
    chrome.storage.sync.get(["geminiApiKey"], (result) => {
      sendResponse({ geminiApiKey: result.geminiApiKey || null });
    });
    return true; // IMPORTANT: Indicates sendResponse is async
  }
});


// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.get(["geminiApiKey"], (result) => {
//     if (!result.geminiApiKey) {
//       chrome.runtime.openOptionsPage(); // opens options.html
//     }
//   });
// });
