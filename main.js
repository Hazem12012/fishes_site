const closeButton = document.querySelector(".icon-close");
const buttonLogin = document.querySelector(".butlogin");


const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

const wrapper = document.querySelector(".wrapper");



registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
}); 

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
}); 
buttonLogin.addEventListener("click", () => {
  console.log("hazem");
    wrapper.style.cssText = "transform: scale(1);";
    
});
closeButton.addEventListener("click", () => {
    wrapper.style.cssText = "transform: scale(0);";
})

