!function(){var t,e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),d=document.querySelector("body");e.addEventListener("click",(function(){t=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),e.setAttribute("disabled",""),r.removeAttribute("disabled")})),r.addEventListener("click",(function(){clearInterval(t),r.setAttribute("disabled",""),e.removeAttribute("disabled")})),r.setAttribute("disabled","")}();
//# sourceMappingURL=01-color-switcher.790f2b67.js.map
