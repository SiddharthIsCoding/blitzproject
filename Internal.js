browser.runtime.onMessage.addListener((message) => {
  if (message.darkness !== undefined) {
    let level = message.darkness / 100; // 0 to 1
    document.documentElement.style.filter = `brightness(${1 - level})`;
  }
});