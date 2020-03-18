window.addEventListener("load", function() {
  console.log("script.js");
  document.addEventListener("scroll", function() {
    const scrollPos = window.scrollY;
    const $sections = document.querySelectorAll("body > section");
    const $links = document.querySelectorAll(".nav__link");

    $sections.forEach(function($el) {
      console.log("$l", scrollPos, $el.offsetTop);
      if (
        $el.offsetTop <= scrollPos &&
        $el.offsetTop + $el.offsetHeight > scrollPos
      ) {
        $links.forEach(function($l) {
          $l.classList.remove("active");
          if ($el.getAttribute("id") === $l.getAttribute("href").substring(1)) {
            $l.classList.add("active");
          }
        });
      }
    });
  });
});
