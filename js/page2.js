// const buttonsDiv = document.getElementById("buttons");
// const noBtn = document.getElementById("no");

// buttonsDiv.addEventListener("click", (e) => {
//   if (e.target.classList.contains("yes")) {
//     document.body.innerHTML = `
//       <div class="final">
//         <h1>YAY 💕</h1>
//         <p>It’s a date ❤️</p>
//       </div>
//     `;
//   }
// });

// noBtn.addEventListener("click", () => {
//   const rect = noBtn.getBoundingClientRect();

//   for (let i = 0; i < 6; i++) {
//     const yes = document.createElement("button");
//     yes.textContent = "YES 😘";
//     yes.className = "yes";

//     yes.style.position = "absolute";
//     yes.style.left =
//       rect.left + Math.random() * rect.width - rect.width / 2 + "px";
//     yes.style.top =
//       rect.top + Math.random() * rect.height - rect.height / 2 + "px";

//     document.body.appendChild(yes);
//   }
// });


// function spawnHeart() {
//   const heart = document.createElement("div");
//   heart.className = "heart";
//   heart.textContent = "❤️";

//   heart.style.left = Math.random() * 100 + "vw";
//   heart.style.fontSize = Math.random() * 20 + 10 + "px";
//   heart.style.animationDuration = Math.random() * 3 + 4 + "s";

//   document.body.appendChild(heart);

//   setTimeout(() => heart.remove(), 7000);
// }

// setInterval(spawnHeart, 400);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const buttonsDiv = document.getElementById("buttons");
// const noBtn = document.getElementById("no");

// // ONE handler for all YES buttons (existing + future)
// document.body.addEventListener("click", (e) => {
//   if (e.target.classList.contains("yes")) {
//     window.location.href = "final.html";
//   }
// });

// noBtn.addEventListener("click", () => {
//   const rect = noBtn.getBoundingClientRect();

//   for (let i = 0; i < 6; i++) {
//     const yes = document.createElement("button");
//     yes.textContent = "YES 😘";
//     yes.className = "yes";

//     yes.style.position = "absolute";
//     yes.style.left =
//       rect.left + Math.random() * rect.width - rect.width / 2 + "px";
//     yes.style.top =
//       rect.top + Math.random() * rect.height - rect.height / 2 + "px";

//     document.body.appendChild(yes);
//   }
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const noBtn = document.getElementById("no");

// Global YES handler (works for all YES buttons, existing & spawned)
document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("yes")) {
    explodeHearts(e.clientX, e.clientY);

    setTimeout(() => {
      window.location.href = "final.html";
    }, 800);
  }
});

noBtn.addEventListener("click", () => {
  const rect = noBtn.getBoundingClientRect();

  for (let i = 0; i < 6; i++) {
    const yes = document.createElement("button");
    yes.textContent = "YES 😘";
    yes.className = "yes";

    yes.style.position = "absolute";
    yes.style.left =
      rect.left + Math.random() * rect.width - rect.width / 2 + "px";
    yes.style.top =
      rect.top + Math.random() * rect.height - rect.height / 2 + "px";

    document.body.appendChild(yes);
  }
});

// HEART EXPLOSION FUNCTION
function explodeHearts(x, y) {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "explosion-heart";
    heart.textContent = "❤️";

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 150 + 50;

    heart.style.left = x + "px";
    heart.style.top = y + "px";
    heart.style.setProperty("--x", Math.cos(angle) * distance + "px");
    heart.style.setProperty("--y", Math.sin(angle) * distance + "px");

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 800);
  }
}
