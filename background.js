chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "openInGoogleMaps",
      title: "Open Address in Google Maps",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "openInGoogleMaps") {
      const address = info.selectionText;
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
      chrome.tabs.create({ url: mapsUrl });
    }
  });