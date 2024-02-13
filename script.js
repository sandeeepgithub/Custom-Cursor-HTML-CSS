const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

console.log(cursorDot, cursorOutline);

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    {
      duration: 500,
      fill: "forwards",
    }
  );
});

window.addEventListener("click", () => {
  cursorOutline.classList.add("expand");

  setTimeout(() => {
    cursorOutline.classList.remove("expand");
  }, 500);
});
