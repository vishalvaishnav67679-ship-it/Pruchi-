
const surprise = document.getElementById("surprise");
const surpriseBtn = document.getElementById("surpriseBtn");
const closeBtn = document.getElementById("closeBtn");
const wishBtn = document.getElementById("wishBtn");
const toast = document.getElementById("toast");

surpriseBtn.addEventListener("click", function () {
  surprise.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  surprise.classList.remove("show");
});

surprise.addEventListener("click", function (event) {
  if (event.target === surprise) {
    surprise.classList.remove("show");
  }
});

wishBtn.addEventListener("click", function () {
  toast.textContent = "Birthday love sent with best wishes from Vishal! ❤️";
  toast.classList.add("show");

  setTimeout(function () {
    toast.classList.remove("show");
  }, 3000);

  createConfetti();
});

function createConfetti() {
  const symbols = ["✨", "❤️", "✦", "🎉"];

  for (let i = 0; i < 25; i++) {
    const item = document.createElement("span");

    item.textContent = symbols[
      Math.floor(Math.random() * symbols.length)
    ];

    item.style.position = "fixed";
    item.style.left = Math.random() * 100 + "vw";
    item.style.top = "-30px";
    item.style.fontSize = (14 + Math.random() * 16) + "px";
    item.style.zIndex = "30";
    item.style.pointerEvents = "none";
    item.style.transition = "transform 2.5s ease-in, opacity 2.5s ease-in";

    document.body.appendChild(item);

    requestAnimationFrame(function () {
      item.style.transform =
        "translateY(" + (window.innerHeight + 60) + "px) rotate(500deg)";
      item.style.opacity = "0";
    });

    setTimeout(function () {
      item.remove();
    }, 2600);
  }
}
