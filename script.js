window.addEventListener("load", function() {
  console.log("script.js");

  function randomElements(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    console.log("arr", array);
    return array;
  }

  document.addEventListener("scroll", function() {
    const scrollPos = window.scrollY;
    const $sections = document.querySelectorAll("body > section");
    const $links = document.querySelectorAll(".nav__link");

    $sections.forEach(function($el) {
      // console.log("$l", scrollPos, $el.offsetTop);
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

  // portfolio

  document.querySelectorAll(".tags__item").forEach(function($item) {
    $item.addEventListener("click", function(e) {
      e.preventDefault();
      const $galleryItem = document.querySelectorAll(".gallery__item");

      document.querySelectorAll(".tags__item").forEach(function($el) {
        $el.classList.remove("tags__item--active");
      });

      $item.classList.add("tags__item--active");

      $galleryItem.forEach(function($v, k) {
        $v.remove();
        document.querySelector(".gallery").prepend($galleryItem[k]);
      });
    });
  });

  document.querySelectorAll(".gallery__item").forEach(function($item) {
    $item.addEventListener("click", function(e) {
      e.preventDefault();
      console.log("okkk");
      document.querySelectorAll(".gallery__item").forEach(function($el) {
        $el.classList.remove("gallery__item--active");
      });

      $item.classList.add("gallery__item--active");
    });
  });
});
