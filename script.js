let NameError = document.querySelector("#name-error");
let PhoneError = document.querySelector("#phone-error");
let EmailError = document.querySelector("#email-error");
let MessageError = document.querySelector("#message-error");
let SubmitError = document.querySelector("#submit-error");

function ValidateName() {
  let Name = document.getElementById("contact-name").value;
  if (Name.length == 0) {
    NameError.innerHTML = "Name is required";
    return false;
  }
  if (!Name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    NameError.innerHTML = "Write full name";
    return false;
  }

  NameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function ValidatePhone() {
  let Phone = document.getElementById("contact-phone").value;
  if (Phone.length == 0) {
    PhoneError.innerHTML = "Phone is required";
    return false;
  }
  if (Phone.length !== 10) {
    PhoneError.innerHTML = "Phone should be 10 digits";
    return false;
  }
  if (!Phone.match(/^[0-9]{10}$/)) {
    PhoneError.innerHTML = "Only digits please";
    return false;
  }

  PhoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function ValidateEmail() {
  let Email = document.getElementById("contact-email").value;

  if (Email.length == 0) {
    EmailError.innerHTML = "Email is required";
    return false;
  }
  if (!Email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    EmailError.innerHTML = "Email invalid";
    return false;
  }

  EmailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function ValidateMessage() {
  let Message = document.getElementById("contact-message").value;
  let Required = 30;
  let Length = Required - Message.length;

  if (Length > 0) {
    MessageError.innerHTML = Length + " More characters requried";
    return false;
  }

  MessageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function ValidateForm() {
  if (
    !ValidateName() ||
    !ValidatePhone() ||
    !ValidateEmail() ||
    !ValidateMessage()
  ) {
    SubmitError.style.display = "block";
    SubmitError.innerHTML = "Please fix error to submit";
    setTimeout(function () {
      SubmitError.style.display = "none";
    }, 3000);
    return false;
  }
}
