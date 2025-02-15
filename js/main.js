window.onload = () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Happy Valentines Day Wave 31').split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // Adds a letter every 300ms
      }
    }

    appendTitle();
  }, 1000);
};
