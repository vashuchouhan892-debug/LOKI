document.addEventListener("DOMContentLoaded", () => {
  console.log("LOKI AI Started");

  const title = document.querySelector("h1");

  setInterval(() => {
    title.style.textShadow =
      Math.random() > 0.5
        ? "0 0 30px cyan"
        : "0 0 15px #00ffff";
  }, 500);
});
