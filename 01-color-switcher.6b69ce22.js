!function(){var t={body:document.querySelector("body"),startButton:document.querySelector("[data-start]"),stopButton:document.querySelector("[data-stop]")};t.startButton.addEventListener("click",(function(){t.startButton.disabled=!0,t.stopButton.disabled=!1,o=setInterval((function(){t.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),t.stopButton.addEventListener("click",(function(){t.stopButton.disabled=!0,t.startButton.disabled=!1,clearTimeout(o)}));var o=null;t.stopButton.setAttribute("disabled",!0)}();
//# sourceMappingURL=01-color-switcher.6b69ce22.js.map
