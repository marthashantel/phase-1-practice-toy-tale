let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  fetchToys();

  const toyForm = document.querySelector(".add-toy-form");
  toyForm.addEventListener("submit", handleNewToySubmit);
});

function fetchToys() {
  fetch("http://localhost:3000/toys")
    .then(res => res.json())
    .then(toys => {
      toys.forEach(renderToyCard);
    });
}

function fetchToys() {
  fetch("http://localhost:3000/toys")
    .then(res => res.json())
    .then(toys => {
      toys.forEach(renderToyCard);
    });
}

