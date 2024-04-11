import "./style.scss";
import gsap from "gsap";

gsap.to(".box-body", {
  x: 0,
  duration: 1,
  ease: "power4.out",
});
gsap.to(".sneakers", {
  y: 140,
  duration: 1,
  delay: 1.1,
  ease: "power4.out",
});
gsap.to(".sneaker", {
  rotate: 0,
  duration: 1,
  delay: 1.1,
  ease: "power4.out",
});
gsap.to(".sneaker-1", {
  y: 64,
  duration: 1,
  delay: 1.1,
  ease: "power4.out",
});
gsap.to(".box-top", {
  y: 210,
  duration: 1,
  delay: 1.3,
  ease: "power4.out",
});
gsap.to(".box-body, .box-top, .sneakers", {
  x: 500,
  duration: 1,
  delay: 2.3,
  ease: "power4.out",
});

const reload = document.querySelector(".reload");
reload.addEventListener("click", () => {
  window.location.reload();
});
