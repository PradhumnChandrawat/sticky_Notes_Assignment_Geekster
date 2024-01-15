let textArea = document.querySelector("#notes");
let colorBtn = document.querySelector("#color-btn");
let notesArea = document.querySelector(".notes-area");
let addButton = document.querySelector("#add-btn");

addButton.addEventListener("click", (e) => {
  let colorValue = colorBtn.value;
  //   console.log(colorValue);
  let text = textArea.value;
  // console.log(text);
  if (text === "") {
    alert("Please enter some text!!");
    return;
  }
  makeNotes(text, colorValue);
  textArea.value = "";
  document.querySelector(".notes-not-added").style.display = "none";
  removeNotesFun();
});

function makeNotes(text, colorValue) {
  //   console.log("funtion working...");
  let div = document.createElement("div");
  div.innerHTML = `<p>${text}</p> <button class="x-btn">X</button>`;
  div.style.backgroundColor = colorValue;
  div.classList.add("sticky-notes");
  notesArea.appendChild(div);
}

function removeNotesFun() {
  let rightCont = document.querySelector(".right-container");
  rightCont.addEventListener("click", (e) => {
    if (e.target.innerText === "X") {
      e.target.parentElement.remove();
    }
  });
}
