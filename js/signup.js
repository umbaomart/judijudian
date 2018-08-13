var resultName = '';
var resultEmail = '';
var resultNumber = '';
var resultPwd = '';
//  get the input name field class Name
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const number = document.querySelector('.number');
const pwd = document.querySelector('.pwd');
const btnSubmit = document.querySelector('.submit');
const loading = document.querySelector('.loading-container');

// eventListener for name
name.addEventListener('focusin', nameEventFocusIn);
name.addEventListener('focusout', nameEventFocusOut)

// eventListener for email
email.addEventListener('focusin', emailEventFocusIn);
email.addEventListener('focusout', emailEventFocusOut);

// eventListener for number
number.addEventListener('focusin', numberEventFocusIn);
number.addEventListener('focusout', numberEventFocusOut);

// eventListener for number
pwd.addEventListener('focusin', pwdEventFocusIn);
pwd.addEventListener('focusout', pwdEventFocusOut);

// eventListener for btnSubmit
btnSubmit.addEventListener('click', formSubmit);

// get the container field to add the class onfocus
const nameField = document.querySelector('.field-name');
const emailField = document.querySelector('.field-email');
const numberField = document.querySelector('.field-number');
const pwdField = document.querySelector('.field-pwd');
// get the label element to add the class onfocus-text
const nameLabel = document.querySelector('.label-text-name');
const emailLabel = document.querySelector('.label-text-email');
const numberLabel = document.querySelector('.label-text-number');
const pwdLabel = document.querySelector('.label-text-pwd');

// function for name
function nameEventFocusIn() {
    nameField.classList.add('onfocus');
    nameLabel.classList.add('onfocus-text');
}
function nameEventFocusOut() {
    if (name.value != '') {
        resultName =  name.value;
        nameError.innerHTML = "";
    } else {
        // display the error
        resultName =  '';
        nameError.innerHTML = "<i class='fa fa-exclamation-circle error-icon'></i> Name is required!";
    }
    nameField.classList.remove('onfocus');
    nameLabel.classList.remove('onfocus-text');
}   // name function end ====================

// function for email
function emailEventFocusIn() {
    emailField.classList.add('onfocus')
    emailLabel.classList.add('onfocus-text')
}
function emailEventFocusOut() {
    if (email.value != '') {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (re.test(email.value) == true) {
            resultEmail =  email.value;
            emailError.innerHTML = "";
        } else {
            resultEmail =  '';
            emailError.innerHTML = "<i class='fa fa-exclamation-circle error-icon'></i> Invalid Email!";
        }
    } else {
        // display the error
        resultEmail =  '';
        emailError.innerHTML = "<i class='fa fa-exclamation-circle error-icon'></i> Email is required!";
    }
    
    emailField.classList.remove('onfocus')
    emailLabel.classList.remove('onfocus-text')
}   // email function end ====================

// function for number
function numberEventFocusIn() {
    numberField.classList.add('onfocus')
    numberLabel.classList.add('onfocus-text')
}
function numberEventFocusOut() {
    if (number.value != '') {
        resultNumber = number.value;
        numberError.innerHTML = "";
    } else {
        resultNumber =  '';
        numberError.innerHTML = "<i class='fa fa-exclamation-circle error-icon'></i> Phone Number is required!";
    }
    numberField.classList.remove('onfocus')
    numberLabel.classList.remove('onfocus-text')
}   // number function end ====================

// function for password
function pwdEventFocusIn() {
    pwdField.classList.add('onfocus')
    pwdLabel.classList.add('onfocus-text')
}
function pwdEventFocusOut() {
    if (pwd.value != '') {
        resultPwd = pwd.value;
        pwdError.innerHTML = "";
    } else {
        resultPwd =  '';
        pwdError.innerHTML = "<i class='fa fa-exclamation-circle error-icon'></i> Phone Number is required!";
    }
    pwdField.classList.remove('onfocus')
    pwdLabel.classList.remove('onfocus-text')
}   // number function end ====================

// geting all the error container for the formSubmit
const nameError = document.querySelector('.error-name');
const emailError = document.querySelector('.error-email');
const numberError = document.querySelector('.error-number');
const pwdError = document.querySelector('.error-pwd');

// console.log(pwdError, numberError);


// function for btnSubmit
function formSubmit(e) {
    e.preventDefault;
    
    if (resultName == '') {
        nameError.innerHTML = "<i class='fa fa-exclamation-circle error-icon'></i> Name is required!";
    }
    if (resultEmail == '') {
        emailError.innerHTML = "<i class='fa fa-exclamation-circle error-icon'></i> Email is required!";
    }
    if (resultNumber == '') {
        numberError.innerHTML = "<i class='fa fa-exclamation-circle error-icon'></i> Phone Number is required!";
    }
    if (resultPwd == '') {
        pwdError.innerHTML = "<i class='fa fa-exclamation-circle error-icon'></i> Phone Number is required!";
    }     
    
    if (resultName != '' && resultEmail != '' && resultNumber != '' && resultPwd != '') {
        loading.classList.add('loading');
        setTimeout(function() {
            loading.classList.remove('loading');
            alert (resultName + ' Sorry judijudian.com is not operating anymore! Sorry for the inconvenience.');

            window.location.replace("index.html");
        }, 3000)
    }
}

const closeBtn = document.querySelector('#closebtn');
const signupWindow = document.querySelector('.section-signup');

closeBtn.addEventListener('click', closeSignupWindow);

// signupWindow.classList.add('closeWindow');

function closeSignupWindow() {
    // console.log(123);
    signupWindow.classList.add('closeWindow');
}

//  addEventListener for signupWindow to popup  ========================

const navSignup = document.querySelector('.btn-cta');
const btnGocap = document.querySelector('#submitGocap');
const btnHot = document.querySelector('#submitHot');
const btnGold = document.querySelector('#submitGold');

// event Listener for the popup signup button
navSignup.addEventListener('click', openSignup1);
btnGocap.addEventListener('click', openGocap);
btnHot.addEventListener('click', openHot);
btnGold.addEventListener('click', openGold);

function openSignup1(e) {
    e.preventDefault;
    signupWindow.classList.remove('closeWindow');
}

function openGocap(e) {
    e.preventDefault;
    signupWindow.classList.remove('closeWindow');
}

function openHot(e) {
    e.preventDefault;
    signupWindow.classList.remove('closeWindow');
}

function openGold(e) {
    e.preventDefault;
    signupWindow.classList.remove('closeWindow');
}




