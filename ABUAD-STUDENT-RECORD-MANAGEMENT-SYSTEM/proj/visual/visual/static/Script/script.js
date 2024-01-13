// Custom button code
const fileButton = document.getElementById("passportphoto");
const customButton = document.getElementById("custom-button");
const customText = document.getElementById("custom-text");

customButton.addEventListener("click", function () {
  fileButton.click();
});

fileButton.addEventListener("change", function () {
  if (fileButton.value) {
    customText.innerHTML = fileButton.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/);
  } else {
    customText.innerHTML = "upload image (.jpg, .png, .jpeg)";
  }
});

