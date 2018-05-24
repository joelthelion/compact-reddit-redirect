const compactReddit = "https://i.reddit.com"

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {redirectUrl: compactReddit + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]}
  },
  {
    urls: [
      "*://reddit.com/*",
      "*://www.reddit.com/*",
      "*://np.reddit.com/*",
      "*://new.reddit.com/*"
    ],
    types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
  },
  ["blocking"]
)
