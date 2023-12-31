const first =
  "https://github.com/Step3-kakao-tech-campus/Team9_FE/assets/48244988/13500973-3062-4d24-8c38-0632d0cbc98b";
const second =
  "https://github.com/Step3-kakao-tech-campus/Team9_FE/assets/48244988/dd72396a-73e6-43fb-bce6-c9a1dbff574a";

function insertButton() {
  const $button = document.getElementById("linkNamu");
  if ($button) {
    return;
  }

  const button = document.createElement("img");
  button.id = "linkNamu";
  button.src = `${first}`;
  button.style.position = "fixed";
  button.style.bottom = "4rem";
  button.style.left = "4rem";
  button.style.height = "4rem";
  button.style.content = "contain";
  button.style.cursor = "pointer";
  button.style.zIndex = "9999";

  button.addEventListener("click", function () {
    window.location.href = "https://kc709aacd7d14a.user-app.krampoline.com/";
  });

  button.addEventListener("mouseenter", function () {
    button.src = `${second}`;
  });

  button.addEventListener("mouseleave", function () {
    button.src = `${first}`;
  });

  let $body = document.querySelector("body");
  $body.prepend(button);
}

function removeButton() {
  const $button = document.getElementById("linkNamu");
  if ($button) {
    $button.remove();
  }
}

function handle(message) {
  if (message === "ON") {
    insertButton();
  } else if (message === "OFF") {
    removeButton();
  }
}

function scrollHandler(event) {
  if (window.scrollY === 0 && event.deltaY < 0) {
    window.location.href = "https://kc709aacd7d14a.user-app.krampoline.com/";
  }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "ON" || request.message === "OFF") {
    handle(request.message);
  } else {
    if (request.message === "scrollOn") {
      window.addEventListener("wheel", scrollHandler);
    } else {
      window.removeEventListener("wheel", scrollHandler);
    }
  }
});

chrome.storage.local.get(["turn"], function (result) {
  handle(result.turn);
});

chrome.storage.local.get(["scroll"], function (result) {
  if (result.scroll === "ON") {
    window.addEventListener("wheel", scrollHandler);
  } else if (result.scroll === "OFF") {
    window.removeEventListener("wheel", scrollHandler);
  }
});
