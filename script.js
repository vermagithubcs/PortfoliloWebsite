function smoothScrolling() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
function revealtoSpan() {
  let reveal = document.querySelectorAll(".reveal");
  reveal.forEach(function (elem) {
    let parent = document.createElement("span");
    let child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}
function valueSetters() {
  gsap.set("#nav a", {
    y: "-100%",
    opacity: 0,
  });
  gsap.set("#home span .child", {
    y: "100%",
  });
  gsap.set("#home .row2 img", {
    opacity: 0,
  });
}
function loaderAnimation() {
  var tl = gsap.timeline();
  tl.from("#loader .child span", {
    x: 100,
    duration: 1.5,
    stagger: 0.2,
    ease: Circ.easeInOut,
  });
  tl.to("#loader .parent .child", {
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut,
  });
  tl.to("#loader", {
    height: 0,
    duration: 1,
    ease: Circ.easeInOut,
  });
  tl.to("#green", {
    height: "100%",
    top: 0,
    duration: 0.7,
    delay: -0.5,
    ease: Circ.easeInOut,
  });
  tl.to("#green", {
    height: "0%",
    duration: 1,
    delay: -0.3,
    ease: Circ.easeInOut,
    onComplete: function () {
      animateHomePage();
    },
  });
}
function animateHomePage() {
  var tl = gsap.timeline();

  tl.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: Expo.easeInOut,
  });
  tl.to("#home .parent .child", {
    y: 0,
    stagger: 0.1,
    duration: 1.5,
    ease: Expo.easeInOut,
  });
  tl.to("#home .row2 img", {
    x: -20,
    opacity: 1,
    ease: Expo.easeInOut,
  });
}
// smoothScrolling();
revealtoSpan();
valueSetters();
loaderAnimation();
function skills() {

  let js = document.querySelector("#skills .skills .js");
  js.addEventListener("mousemove", () => {
    gsap.to(js, {
      scale: 1.5,
    });
  });
  js.addEventListener("mouseleave", () => {
    gsap.to(js, {
      scale: 1,
    });
  });
  let react = document.querySelector("#skills .skills .react");
  react.addEventListener("mousemove", () => {
    gsap.to(react, {
      scale: 1.5,
    });
  });
  react.addEventListener("mouseleave", () => {
    gsap.to(react, {
      scale: 1,
    });
  });
  let gs = document.querySelector("#skills .skills .gs");
  gs.addEventListener("mousemove", () => {
    gsap.to(gs, {
      scale: 1.5,
    });
  });
  gs.addEventListener("mouseleave", () => {
    gsap.to(gs, {
      scale: 1,
    });
  });
  let tail = document.querySelector("#skills .skills2 .tail");
  tail.addEventListener("mousemove", () => {
    gsap.to(tail, {
      scale: 1.5,
    });
  });
  tail.addEventListener("mouseleave", () => {
    gsap.to(tail, {
      scale: 1,
    });
  });
  let gi = document.querySelector("#skills .skills2 .gi");
  gi.addEventListener("mousemove", () => {
    gsap.to(gi, {
      scale: 1.5,
    });
  });
  gi.addEventListener("mouseleave", () => {
    gsap.to(gi, {
      scale: 1,
    });
  });
  let nod = document.querySelector("#skills .skills2 .nod");
  nod.addEventListener("mousemove", () => {
    gsap.to(nod, {
      scale: 1.5,
    });
  });
  nod.addEventListener("mouseleave", () => {
    gsap.to(nod, {
      scale: 1,
    });
  });
}
skills();
gsap.from("#skills-section .skills img, .skills2 img",{
  y:-60,
  duration:1,
  opacity:0,
  stagger:1,
  scrollTrigger:{
    trigger:"#skills-section .skills",
    scroller:"body",
    start:"top 90%",
    end:"bottom 40%",
    scrub:4,
  }
})
gsap.from(".project-section .works h2",{
  x:-400,
  opacity:0,
  stagger:1,
  scrollTrigger:{
    trigger:".project-section .works",
    scroller:"body",
    start:"top 50%",
    end:"bottom 100%",
    scrub:3,
  }
})
gsap.from("#contact-section h1",{
  y:-100,
  opacity:0,
})
gsap.from("#contact-section .cont-social .github img,#contact-section .cont-social .instagram img,#contact-section .cont-social .linkedin img, #contact-section .cont-social .x img",{
  y:-50,
  opacity:0,
  duration:0.3,
  stagger:1,
  scrollTrigger:{
    trigger:"#contact-section .cont-social",
    scroller:"body",
    start:"top 100%",
    end:"bottom 80%",
    scrub:3,
  }
})
let main = document.querySelector('#main');
let customCursor = document.querySelector('#cursor');
main.addEventListener("mousemove",function(e){
  gsap.to(customCursor,{
    x:e.x,
    y:e.y,
    duration:1,
    ease:"back.out"
  })
})

function clearForm(event){
  event.preventDefault();
  const form = document.querySelector('#contact-form');
  form.submit();
  form.reset();
}
function menu(){
  const menuToggle = document.querySelector('#menu-toggle');
  const navLinks = document.querySelector("#nav-links");

  menuToggle.addEventListener("click",()=>{
    navLinks.classList.toggle('active');
  })
}
menu();