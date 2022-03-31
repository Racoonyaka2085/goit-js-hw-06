const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.elements.password.value === "" || form.elements.email.value === "") {
        alert("Please fill in all the fields!");
    }
    const {
        elements: { email, password },
    } = event.currentTarget;
    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
});