function initScroll() {
  const menuJsHome = document.querySelectorAll(".menuJsHome a");

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
