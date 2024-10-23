let basket = document.getElementById("basket");
let gameArea = document.getElementById("gameArea");
let scoreDisplay = document.getElementById("score");
let score = 0;

// Move basket left and right
document.addEventListener("keydown", function(event) {
  let left = basket.offsetLeft;
  if (event.key === "ArrowLeft" && left > 0) {
    basket.style.left = left - 30 + "px";
  } else if (event.key === "ArrowRight" && left < gameArea.offsetWidth - basket.offsetWidth) {
    basket.style.left = left + 30 + "px";
  }
});

// Function to generate stars
function createStar() {
  let star = document.createElement("div");
  star.classList.add("star");
  star.style.left = Math.random() * (gameArea.offsetWidth - 30) + "px";
  gameArea.appendChild(star);

  // Animation of star falling
  let fallInterval = setInterval(function() {
    let starTop = star.offsetTop;
    let starLeft = star.offsetLeft;
    let basketLeft = basket.offsetLeft;

    // Check if the star reaches the basket
    if (
      starTop + 30 >= gameArea.offsetHeight - 60 &&
      starLeft >= basketLeft &&
      starLeft <= basketLeft + 100
    ) {
      score++;
      scoreDisplay.textContent = score;
      star.remove();
      clearInterval(fallInterval);
    } else if (starTop + 30 >= gameArea.offsetHeight) {
      star.remove();
      clearInterval(fallInterval);
    } else {
      star.style.top = starTop + 3 + "px";
    }
  }, 10);
}

// Generate stars at regular intervals
setInterval(createStar, 1000);
