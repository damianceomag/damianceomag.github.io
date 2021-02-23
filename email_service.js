function sendEmail() {
    let tempParams = {
        from_name: document.getElementById("firstName").value + ' ' + document.getElementById("lastName").value,
        to_name: 'Damian',
        user_email: document.getElementById("userEmail").value,
        message: document.getElementById("message").value

    }

    emailjs.send('gmail', 'template_standard', tempParams, 'user_RTZT9723Q543zMbjEwb2g')
        .then(function (res) {
            console.log("success", res.status);
        })
}