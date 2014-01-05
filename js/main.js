var b = document.querySelector("#b");
var c = document.querySelector("#c");
updateClipPath();
window.addEventListener("resize", updateClipPath);
function updateClipPath() {
      var c_rect = c.getBoundingClientRect();
      var top = c_rect.top + "px, ";
      var left = c_rect.left + "px, ";
      var width = c_rect.width + "px, ";
      var height = c_rect.height + "px, ";
      var radius = "3px"; // border-radius da div c, definido no CSS
      b.style.clipPath = "rectangle(" + top + left + width + height + radius + ")";
      b.style.webkitClipPath = "rectangle(" + top + left + width + height + radius + ")";
}