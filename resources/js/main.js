// Start of rules modal
// Get the modal element
const modal = document.getElementById("rulesModal");

// Get the button that opens the modal
const rulesBtn = document.getElementById("rulesBtn");

// Get the close element that closes the modal
const closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
rulesBtn.onclick = () => {
  modal.style.display = "block";
  // Add event listener to the window object
  window.addEventListener("click", outsideClick);
};

// When the user clicks on closeBtn (x), close the modal
closeBtn.onclick = () => {
  modal.style.display = "none";
  // Remove the event listener when the modal is closed
  window.removeEventListener("click", outsideClick);
};

// When the user clicks anywhere outside of the modal, it wont close it
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// End of rules modal
