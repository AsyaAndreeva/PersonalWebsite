let text = document.getElementById("title");
let originalText = text.textContent;
let textArray = ['Student teacher at SoftUni Kids', 'UI & UX Designer', 'Web Developer'];
let index = 0;

function toggleText() {
  let targetText = textArray[index];

  gsap.to(text, {
    duration: 1.5,
    text: targetText,
    ease: "none",
  });
    index++;
    if (index >= textArray.length) {
        index = 0; // Reset the index when reaching the end of the array
      }
}

// Call toggleText() every 5 seconds
setInterval(toggleText, 3000);
