const form = document.querySelector("form");
const msg = document.querySelector("#status-message");
const minNameLength = 3;
const minMessageLength = 10;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    }
    if (data.name.length < minNameLength) {
        msg.innerHTML = "Name is too short";
        msg.style.color = "#F5A100";
    }
    if (data.message.length < minMessageLength) {
        msg.innerHTML = "Message is too short";
        msg.style.color = "#F5A100";
    }
    if (data.name.length >= minNameLength && data.message.length >= minMessageLength) {
        msg.innerHTML = "Sending...";
        msg.style.color = "green";

        setTimeout(() => {
            alert(`Name: ${data.name}  Email: ${data.email} Message: ${data.message}`);
            msg.innerHTML = "";
            form.reset();
        }, 5000);
    }
});