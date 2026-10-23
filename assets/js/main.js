(function () {
  var navToggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  var follow = document.getElementById("follow-btn");
  var urls = document.getElementById("author-urls");
  if (follow && urls) {
    follow.addEventListener("click", function () {
      var open = urls.classList.toggle("open");
      follow.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
})();
