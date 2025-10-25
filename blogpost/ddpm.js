const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll("section").forEach((sec) => {
  sec.classList.add("fade");
  observer.observe(sec);
});

const style = document.createElement("style");
style.innerHTML = `
.fade { opacity: 0; transform: translateY(20px); transition: all 0.7s ease; }
.fade.visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);
