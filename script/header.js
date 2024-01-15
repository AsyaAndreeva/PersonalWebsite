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
        index = 0;
      }
}
setInterval(toggleText, 3000);
