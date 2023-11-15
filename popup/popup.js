var myButton = document.getElementById("myButton");
var myButton2 = document.getElementById("myButton2");

document.addEventListener("DOMContentLoaded", function () {
  myButton.addEventListener("click", function () {
    if (myButton.innerText === "버튼 활성화") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { message: "ON" });
      });
      chrome.storage.local.set({ turn: "ON" });
      myButton.innerText = "버튼 비활성화";
    } else if (myButton.innerText === "버튼 비활성화") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { message: "OFF" });
      });
      chrome.storage.local.set({ turn: "OFF" });
      myButton.innerText = "버튼 활성화";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  myButton2.addEventListener("click", function () {
    if (myButton2.innerText === "스크롤 활성화") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { message: "scrollOn" });
      });
      chrome.storage.local.set({ scroll: "ON" });
      myButton2.innerText = "스크롤 비활성화";
    } else if (myButton2.innerText === "스크롤 비활성화") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { message: "scrollOff" });
      });
      chrome.storage.local.set({ scroll: "OFF" });
      myButton2.innerText = "스크롤 활성화";
    }
  });
});

chrome.storage.local.get(["turn"], function (result) {
  if (result.turn === "ON") myButton.innerText = "버튼 비활성화";
  else if (result.turn === "OFF") myButton.innerText = "버튼 활성화";
});

chrome.storage.local.get(["turn"], function (result) {
  if (result.turn === "ON") myButton2.innerText = "스크롤 비활성화";
  else if (result.turn === "OFF") myButton2.innerText = "스크롤 활성화";
});
