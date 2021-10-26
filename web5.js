const sec1 = document.getElementById("headSec"); //the frst section
const sec2 = document.getElementById("favSec");
const addBtn = sec1.querySelector("button"); //the add movie buttion
const addingDiv = document.getElementById("addingMovie");
const overDiv = document.getElementById("overDiv");
const cancelBtn = addingDiv.querySelectorAll("button")[0];
const addBtn2 = addingDiv.querySelectorAll("button")[1];

const movTitinp = document.getElementById("movieTitle");
const imgUrlInp = document.getElementById("image");
const movRatInp = document.getElementById("rate");
const div0 = document.getElementById("div0");
const form = addingDiv.querySelector("form");

let movTit, imgUrl, movRat;

const addingDivAppernce = () => {
  addingDiv.classList.remove("hidden");
  overDiv.classList.remove("hidden");
};

const addingDivHide = () => {
  addingDiv.classList.add("hidden");
  overDiv.classList.add("hidden");
};

const gettingInfo = () => {
  movTit = movTitinp.value;
  imgUrl = imgUrlInp.value;

  if (
    parseInt(movRatInp.value) < 1 ||
    parseInt(movRatInp.value) > 5 ||
    parseInt(movRatInp.value) == NaN
  ) {
    alert("the rate must be bettwen 1 and 5");
    return 0;
  } else {
    movRat = parseInt(movRatInp.value);
  }
};

addingDivHide();
const addBtnAction = () => {
  form.reset();
  addingDivAppernce();
};

const addBtn2Action = () => {
  addingDivHide();
  let m = gettingInfo();
  if (m == 0) {
    return;
  }
  newMov();
};

const newMov = () => {
  div0.classList.add("hidden");

  const newDiv = document.createElement("div");
  sec2.appendChild(newDiv);
  const newImg = document.createElement("img");
  newImg.src = imgUrl;
  newImg.className = "imgStyle";
  newDiv.appendChild(newImg);
  const newP = document.createElement("p");
  newP.textContent = movTit;
  newP.className = "pStyle";
  newDiv.appendChild(newP);
  const divSon = document.createElement("div");
  divSon.textContent = `${movRat}/5 stars`;
  divSon.className = "divSonStyle";
  newDiv.appendChild(divSon);
};

addBtn.addEventListener("click", addBtnAction);
overDiv.addEventListener("click", addingDivHide);
cancelBtn.addEventListener("click", addingDivHide);
addBtn2.addEventListener("click", addBtn2Action);
