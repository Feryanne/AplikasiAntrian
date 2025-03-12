document.addEventListener("DOMContentLoaded", function () {
  let queueContainer = document.querySelector(".queue-list");
  let queueItems = Array.from(queueContainer.children);
  let highlightedItem = queueItems.find((item) =>
    item.classList.contains("highlighted")
  );
  let highlightedIndex = queueItems.indexOf(highlightedItem);
  let timeButton = document.querySelector(".time-button");

  let countdown = 60; // 10 menit dalam detik
  let timer;

  function updateTime() {
    let minutes = Math.floor(countdown / 60);
    let seconds = countdown % 60;
    timeButton.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (countdown <= 0) {
      clearInterval(timer);
      callQueue();
    } else {
      countdown--;
    }
  }

  function callQueue() {
    let firstItem = queueItems.shift(); // Ambil item pertama
    let newNumber =
      parseInt(queueItems[queueItems.length - 1].textContent.match(/\d+/)[0]) +
      1;
    firstItem.textContent = `No Antrian ${newNumber}`; // Perbarui nomor
    queueItems.push(firstItem); // Masukkan kembali ke bawah

    updateQueueDisplay();
    countdown = 60;
    timer = setInterval(updateTime, 100);
  }

  function updateQueueDisplay() {
    queueContainer.innerHTML = "";
    queueItems.forEach((item) => queueContainer.appendChild(item));

    let newHighlightedIndex = queueItems.findIndex((item) =>
      item.textContent.includes("No Antrian 23")
    );
    queueItems.forEach((item) => item.classList.remove("highlighted"));
    queueItems[newHighlightedIndex].classList.add("highlighted");
  }

  timer = setInterval(updateTime, 100);
});
