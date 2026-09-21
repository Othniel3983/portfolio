const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    menuToggle.setAttribute("aria-label", "Close menu");
  } else {
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    menuToggle.setAttribute("aria-label", "Open menu");
  }
});

const videos = document.querySelectorAll(".projects video");

videos.forEach((video) => {
  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
  });
});
