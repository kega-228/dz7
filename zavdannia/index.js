const form = document.querySelector('#myForm');
const loginInput = document.querySelector('#myInput2');
const loginRequirements = document.querySelector('#loginRequirements');
const passwordInput = document.querySelector('#myInput3');
const passwordRequirements = document.querySelector('#passwordRequirements');
const submitBtn = document.querySelector('#submit');
const message = document.querySelector('#message');

function EnableButton(){
    if(loginInput.getAttribute("correct") === "yes" && passwordInput.getAttribute("correct") === "yes"){
        submitBtn.disabled = false;
    }else{
        submitBtn.disabled = true;
    }
}

loginInput.addEventListener("input", ()=>{
    if (loginInput.value.length < 3 || loginInput.value.length > 10){
        loginRequirements.textContent = "Логін повинен бути від 3 до 10 символів";
        loginInput.setAttribute("correct", "no");
        loginRequirements.setAttribute("correct", "no");
        submitBtn.disabled = true;
    }else if (!/^[a-zA-Z0-9]+$/.test(loginInput.value)){
        loginRequirements.textContent = "Логін повинен містити лише латинські літери та цифри";
        loginInput.setAttribute("correct", "no");
        loginRequirements.setAttribute("correct", "no");
        submitBtn.disabled = true;
    }else{
        loginRequirements.textContent = "Логін вірний";
        loginInput.setAttribute("correct", "yes");
        loginRequirements.setAttribute("correct", "yes");
        EnableButton();
    }

})
passwordInput.addEventListener("input", ()=>{
    if(passwordInput.value.length < 8){
        passwordRequirements.textContent = "Пароль повинен містити не менше 8 символів";
        passwordInput.setAttribute("correct", "no");
        passwordRequirements.setAttribute("correct", "no");
        submitBtn.disabled = true;
    }else if (!/\d/.test(passwordInput.value)){
        passwordRequirements.textContent = "Пароль повинен містити хоча б одну цифру";
        passwordInput.setAttribute("correct", "no");
        passwordRequirements.setAttribute("correct", "no");
        submitBtn.disabled = true;
    }else if(!/[A-Z]/.test(passwordInput.value)){
        passwordRequirements.textContent = "Пароль повинен містити хоча б одну велику літеру";
        passwordInput.setAttribute("correct", "no");
        passwordRequirements.setAttribute("correct", "no");
        submitBtn.disabled = true;
    }else if(/[а-яіїєґё]/.test(passwordInput.value)){
        passwordRequirements.textContent = "Пароль повинен містити лише латинські символи";
        passwordInput.setAttribute("correct", "no");
        passwordRequirements.setAttribute("correct", "no");
        submitBtn.disabled = true;
    }else{
        passwordRequirements.textContent = "Пароль вірний";
        passwordInput.setAttribute("correct", "yes");
        passwordRequirements.setAttribute("correct", "yes");
        EnableButton();
    }
})

submitBtn.addEventListener("click", ()=>{
    message.textContent = `користувача [${loginInput.value}] зареєстровано!`;
    message.style.color = "#2dff00";
    submitBtn.disabled = true;
    loginRequirements.innerHTML = "Вимоги до логіна: <br>від 3 до 10 символів; <br>тільки латинські літери та цифри, без кирилиці й пробілів";
    passwordRequirements.innerHTML = "Вимоги до пароля: <br>не менше 8 символів; <br>хоча б одна цифра; <br>хоча б одна велика латинська літера; <br>без кирилиці. <br>";
    loginInput.value = "";
    passwordInput.value = "";
    passwordRequirements.removeAttribute("correct");
    loginInput.removeAttribute("correct");
    passwordInput.removeAttribute("correct");
    loginRequirements.removeAttribute("correct");
})