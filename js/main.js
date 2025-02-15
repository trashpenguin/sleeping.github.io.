// Ensure localStorage values exist before retrieving them
if (!localStorage.getItem("storageToken")) {
  localStorage.setItem("storageToken", "my_secure_token");
}
if (!localStorage.getItem("storageSession")) {
  localStorage.setItem("storageSession", "session_123");
}
if (!localStorage.getItem("storageExpiresAt")) {
  localStorage.setItem("storageExpiresAt", Date.now() + 3600000); // 1 hour from now
}
// Retrieve values from localStorage
const storageToken = localStorage.getItem("storageToken");
const storageSession = localStorage.getItem("storageSession");
const storageExpiresAt = localStorage.getItem("storageExpiresAt");
console.log("Token:", storageToken);
console.log("Session:", storageSession);
console.log("Expires At:", storageExpiresAt);
window.onload = () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Happy Valentines Day Wave 31').split('');
    // Ensure the title element exists before modifying it
    const titleElement = document.getElementById('title');
    if (!titleElement) {
      console.error("Error: Title element (#title) not found in the HTML.");
      return;
    }
    // Animated text effect
    const titles = "wuwuvyang ❤️".split('');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        titleElement.innerHTML += titles[index] === ' ' 
          ? "<span style='margin-right: 10px'></span>" // Add space
          : `<span>${titles[index]}</span>`; // Add letter
          
        console.log(`Appending: ${titles[index]}`); // Debugging log
        index++;
        setTimeout(appendTitle, 300); // Adds a letter every 300ms
        setTimeout(appendTitle, 300); // Delay for animation effect
      }
    }

    appendTitle();
  }, 1000);
};
