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

//store image locally
var form = document.getElementById('form')

function storeImage(e){
  e.preventDefault;

  var file = document.getElementById("passportphoto");

  var imageobj = file.files[0];

  var reader = new FileReader();

  reader.onload = function(){
    var fileData = reader.result

    localStorage.setItem("image", fileData)
  }

  reader.readAsDataURL(imageobj)

}

form.addEventListener("submit", storeImage)

//pop up
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".popup");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

