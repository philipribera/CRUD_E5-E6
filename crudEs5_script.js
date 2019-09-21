/***********************/
/***   CRUD SCRIPT   ***/
/***   ES5 BUILD     ***/
/***********************/

("use strict");
/* ANCHORS */
const userTable = document.querySelector(".user-table");
/* LISTENERS */
form.addEventListener("submit", getUser);
const inputs = document.querySelectorAll(".finput");
Array.from(inputs, (input)=>{
  input.addEventListener('blur', function rmvBorderOnBlur(e) {
    e.target.classList.remove("field-warning");
  })
})

/* CONSTRUCTOR */
function User(_firstName, _lastName, _eName, _age) {
  this.firstName = _firstName;
  this.lastName = _lastName;
  this.eMail = _eName;
  this.age = _age || 25;
}

User.prototype.validateData = function(e) {
  const inputs = document.querySelectorAll(".finput:not(.age)");
  Array.from(inputs, input => {
    if (input.classList.contains("field-warning")) {
      input.classList.remove("field-warning");
    }
  });

  let inputArr = Array.from(inputs);
  for (let input of inputArr) {
    if (input.value === "") {
      input.classList.add("field-warning");
      input.focus();
      return false;
    }
  }
  console.clear();
  return true;
};

User.prototype.displayUser = function() {
  const textArray = [this.firstName, this.lastName, this.eMail, this.age];
  const newRow = document.createElement("tr");
  const elRmv = document.createElement("td");
  elRmv.appendChild(document.createTextNode("X"));
  elRmv.classList.add("btn", "btn-delete");

  for (let text of textArray) {
    let newTd = document.createElement("td");
    let newText = document.createTextNode(text);
    newTd.appendChild(newText);
    newRow.appendChild(newTd);
  }
  newRow.appendChild(elRmv);
  userTable.appendChild(newRow);

  const btnDelete = document.querySelectorAll(".btn-delete");
  Array.from(btnDelete, del => {
    del.addEventListener("click", this.rmvUser);
  });
};

User.prototype.rmvUser = function(e) {
  e.target.parentElement.remove();
};

// We get form data
function getUser(e) {
  e.preventDefault();
  let inputs = document.querySelectorAll(".finput");
  let newData = Array.from(inputs, input => {
    return input.value;
  });
  registerUser(newData);
}

// We create a new user object and empty fields
function registerUser(args) {
  const newUser = new User(...args);
  if (newUser.validateData()) {
    let inputs = document.querySelectorAll(".finput");
    Array.from(inputs, input => {
      input.value = "";
    });
    newUser.displayUser();
  } else {
    return false;
  }
}
