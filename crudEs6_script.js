/***********************/
/***   CRUD SCRIPT   ***/
/***   ES6 BUILD     ***/
/***********************/

("use strict");
/* CONSTRUCTOR */
class User {
  //constructor(firstName, lastName, eName) {
  constructor(inData) {
    const [firstName, lastName, eName, age = 25] = inData;
    this.firstName = firstName;
    this.lastName = lastName;
    this.eName = eName;
    this.age = age;
  }
}

class UserFunctionality {
  //  We get formData and register new user if valid
  static registerUser(e) {
    e.preventDefault();
    let formData = Array.from(document.querySelectorAll(".finput"));
    // We remove age field from array; default value of 25
    const formDataArr = Array.from(formData);
    const formFiltered = formDataArr.filter(data => {
      return !data.classList.contains("age");
    });

    let validated = UserFunctionality.validateData(formFiltered);
    if (validated) {
      let newData = Array.from(formFiltered, input => {
        return input.value;
      });
      // If validated we instatiate new user
      let newUser = new User(newData);
      // we clear all fields
      formDataArr.forEach(input => input.value = "");      
      // we display new user
      UserView.displayUser(newUser);
    }
  }

  static validateData = formData => {
    for (let input of formData) {
      if (input.classList.contains("field-warning")) {
        input.classList.remove("field-warning");
      } 
      if (input.value === "") {
        input.classList.add("field-warning");
        input.focus();
        return false;
      }
      //document.querySelector('.e-name').value.indexOf('@') === -1)
    }
    return true;
  };

  static removeUser() {
    const btnDelete = document.querySelectorAll(".btn-delete");
    Array.from(btnDelete, del => {
      del.addEventListener("click", e => {
        e.target.parentElement.parentElement.remove();
      });
    });
  }
}

class UserView {
  static displayUser(newUser) {
    const elTr = document.createElement("tr");
    elTr.innerHTML = `
      <td>${newUser.firstName}</td>
      <td>${newUser.lastName}</td>
      <td>${newUser.eName}</td>
      <td>${newUser.age}</td>
      <td><a class="btn btn-delete">X</a></td>
    `;
    userTable.appendChild(elTr);
    UserFunctionality.removeUser();
  }

  static clearAllFields = newData => {
    Array.from(newData, input => (input.value = ""));
  };
}

/* ANCHORS */
const formReg = document.querySelector(".form-reg");
const userTable = document.querySelector(".user-table");

/* LISTENERS */
formReg.addEventListener("submit", UserFunctionality.registerUser);
const inputs = document.querySelectorAll(".finput");
Array.from(inputs, input => {
  input.addEventListener("blur", e => {
    e.target.classList.remove("field-warning");
  });
});
