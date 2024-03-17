const title = document.querySelector(".hero .left span:nth-of-type(3)");
const openLabel = document.querySelector(".open");
const closeLabel = document.querySelector(".close");
const navLinks = document.querySelector(".nav-links");

var typewriter = new Typewriter(title, {
  loop: true,
  delay: 75,
});
typewriter
  .pauseFor(2500)
  .typeString("Tech Consultant")
  .pauseFor(1000)
  .deleteChars(16)
  .start();

let visitors = 0;

const visitorCount = document.querySelector(".divider span");
let counter = setInterval(() => {
  visitors++;
  visitorCount.innerText = `Visitor count: ${visitors}`;
  if (visitors > 9000) {
    visitors = "Over 9000";
    visitorCount.innerText = `Visitor count: ${visitors}`;
    clearInterval(counter);
  }
}, 10);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    if (navLinks.classList.contains("open")) {
      navLinks.classList.add("closed");
      navLinks.classList.remove("open");
    }
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const yOffset = -100; // Adjust this value to your fixed header's height or your preferred offset
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  });
});

openLabel.addEventListener("click", function () {
  console.log("clicked open");
  navLinks.classList.add("open");
  navLinks.classList.remove("closed");
});

closeLabel.addEventListener("click", function () {
  console.log("clicked close");
  navLinks.classList.add("closed");
  navLinks.classList.remove("open");
});
