const name = document.querySelector(".name");
const nameValue = name.getAttribute("data-value");

function insert(x, i, t) {
  let s = 0;
  let ss = 1;
  if (i === 0) {
    s = 20;
    ss = 1.15;
  } else if (i === 1) {
    s = 15;
    ss = 1.1;
  } else if (i === 2) {
    s = 5;
    ss = 1.03;
  } else if (i === 3) {
    s = 0;
    ss = 1;
  } else if (i === 4) {
    s = -5;
    ss = 1.03;
  } else if (i === 5) {
    s = -15;
    ss = 1.1;
  } else if (i === 6) {
    s = -20;
    ss = 1.15;
  }

  const container = document.createElement("div");
  container.classList.add("container");
  const div = document.createElement("div");
  div.textContent = x;
  div.classList.add("character");
  div.style.transform = `rotateY(${s}deg) scale(${ss})`;
  container.appendChild(div);
  name.appendChild(container);
  container.style.animation = `zoom 1.5s ${i /
    20}s cubic-bezier(.23,1.62,.65,.87) forwards`;
  div.style.animation = `long-shadow 1.5s ${i /
    20}s cubic-bezier(.23,1.62,.65,.87) forwards`;
}

function animate() {
  [...nameValue].forEach((x, i) => insert(x, i, nameValue.length));

  setTimeout(() => {
    name.style.animation = "shrink 4s ease-out forwards";
    const characters = document.querySelectorAll(".character");
    characters.forEach(c => {
      c.style.color = "red";
    });
  }, 1000);

  setTimeout(() => {
    name.innerHTML = "";
    name.style.animation = "grow 1s ease forwards";
  }, 4000);
}

animate();

setInterval(animate, 5000);
 