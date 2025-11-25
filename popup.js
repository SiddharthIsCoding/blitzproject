document.getElementById("darkness").addEventListener("input", function() {
  let value = this.value;
  document.getElementById("value").textContent = value;
  browser.tabs.query({active: true, currentWindow: true}).then(tabs => {
    browser.tabs.sendMessage(tabs[0].id, {darkness: value});
  });
});