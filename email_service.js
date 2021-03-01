let sentPrompt = document.getElementById("sentMessage");
sentPrompt.style.display = "none";

function sendEmail() {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let userEmail = document.getElementById("userEmail");
    let userMessage = document.getElementById("message");

    let tempParams = {
        from_name: firstName.value + ' ' + lastName.value,
        to_name: 'Damian',
        user_email: userEmail.value,
        message: userMessage.value
    }

    if (firstName.value != "" && lastName.value != "" && userEmail.value != "" && userMessage.value != "") {
        emailjs.send('gmail', 'template_standard', tempParams, 'user_RTZT9723Q543zMbjEwb2g')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
        hideError();
        messageAppear();
        setTimeout(messageFadeOut, 3000);
    }
    else {
        showError();
    }
}

function showError() {
    let errorMessage = document.getElementById("errorMessage");
    errorMessage.style.display = "block";
}

function hideError() {
    let errorMessage = document.getElementById("errorMessage");
    errorMessage.style.display = "none";
}

function messageFadeOut() {
    let sentMessage = document.getElementById("sentMessage");
    sentMessage.style.display = "none";
}

function messageAppear() {
    let sentMessage = document.getElementById("sentMessage");
    sentMessage.style.display = "flex";
}