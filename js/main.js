document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector('.title');

  // ✅ Ensure the element exists before modifying it
  if (!title) {
    console.error("Error: '.title' element not found!");
    return;
  }

  const text = "I Have Something".split('');

  for (let index = 0; index < text.length; index++) {
    title.innerHTML += text[index] !== ' ' 
      ? `<span>${text[index]}</span>` 
      : `<span style='margin-right: 10px;'></span>`; // Smaller space for mobile
  }

  const textElements = document.querySelectorAll('.title span');
  textElements.forEach((element) => {
    const randomDelay = Math.random() * 1.5; // Faster delay for mobile
    element.style.animationDelay = `${randomDelay}s`;
  });
});
