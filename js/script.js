//Scroll Suave
function initScroll() {
  const menuJsHome = document.querySelectorAll(".menuJsHome a[href^='#']");

  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: "smooth",
    });
  }

  menuJsHome.forEach((item) => {
    item.addEventListener("click", scrollToSection);
  });
}

initScroll();

//Animação ao scroll

function InitAnimaScrolls() {
  const menu = document.querySelectorAll(".jsMenu");
  console.log(menu);

  if (menu.length) {
    const menuMetade = window.innerHeight * 0.75;

    function animaScroll() {
      menu.forEach((menu) => {
        const sectionTop = menu.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - menuMetade < 0;
        if (isSectionVisible) {
          menu.classList.add("menuAtivo");
        } else {
          menu.classList.remove("menuAtivo");
        }
      });
    }
  }

  window.addEventListener("scroll", animaScroll);
}

InitAnimaScrolls();
