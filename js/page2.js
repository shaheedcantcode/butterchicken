const buttonsDiv = document.getElementById("buttons");
const noBtn = document.getElementById("no");

buttonsDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("yes")) {
    document.body.innerHTML = `
      <div class="final">
        <h1>YAY 💕</h1>
        <p>It’s a date ❤️</p>
      </div>
    `;
  }
});

noBtn.addEventListener("click", () => {
  for (let i = 0; i < 3; i++) {
    const yes = document.createElement("button");
    yes.textContent = "YES 😘";
    yes.className = "yes";
    buttonsDiv.appendChild(yes);
  }
});
