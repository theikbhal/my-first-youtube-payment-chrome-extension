chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'getVideoData') {
      const videoId = new URL(window.location.href).searchParams.get('v');
      sendResponse({ videoId });
    }
  });
  