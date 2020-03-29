window.addEventListener("load", function() {
  console.log("script.js");

  const modalConfig = {
    header: "Письмо отправлено",
    theme: "Без темы",
    description: "Без описания"
  };

  const modalConfigTitle = {
    theme: "Тема: ",
    description: "Описание: "
  };

  function sliderTo() {}

  function modal(conf) {
    console.log("c", conf);
    if (document.querySelector(".modal")) {
      return;
    }
    let html = `
    <div class="modal">
      <div class="modal__overlay"></div>
      <div class="modal__container">
        <div class="modal__header">
          ${conf.header}
          <div class="modal__close"></div>
        </div>
        <div class="modal__content">
          <h3>${conf.theme}</h3>
          <p>${conf.description}</p>
        </div>
        <div class="modal__footer">
          <button class="btn btn--primary modal__btn">OK</button>
        </div>
      </div>
    </div>
    `;

    document.querySelector("body").insertAdjacentHTML("beforeend", html);
    const $modalCloseElement = document.querySelectorAll(
      ".modal__close, .modal__overlay, .modal__btn"
    );

    $modalCloseElement.forEach(function($el) {
      $el.addEventListener("click", function() {
        modalClose();
      });
    });
  }

  function modalClose() {
    if (!document.querySelector(".modal")) {
      return;
    }
    // обнуление данных
    resetForm();
    const $modal = document.querySelector(".modal");
    $modal.remove();
  }

  function readForm() {
    let conf = { ...modalConfig };
    const subject = document.querySelector(".feedback-form__subject").value;
    const description = document.querySelector(".feedback-form__description")
      .value;

    if (subject !== "") {
      conf.theme = modalConfigTitle.theme + subject;
    }
    if (description !== "") {
      conf.description = modalConfigTitle.description + description;
    }

    return conf;
  }

  function resetForm() {
    document.querySelector(".feedback-form__name").value = "";
    document.querySelector(".feedback-form__email").value = "";
    document.querySelector(".feedback-form__subject").value = "";
    document.querySelector(".feedback-form__description").value = "";
  }

  document.addEventListener("scroll", function() {
    const scrollPos = window.scrollY;
    const $sections = document.querySelectorAll("body > section");
    const $links = document.querySelectorAll(".nav__link");

    $sections.forEach(function($el) {
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

  // feedback
  document
    .querySelector(".feedback-form")
    .addEventListener("submit", function(e) {
      e.preventDefault();
      const conf = readForm();
      modal(conf);
    });

  // menu
  const menuOpen2Close = function() {
    document.querySelector("body").classList.toggle("menu-open");
  };

  document
    .querySelector(".header .burger")
    .addEventListener("click", menuOpen2Close);
  document
    .querySelector(".mobile-menu .burger")
    .addEventListener("click", menuOpen2Close);
});
