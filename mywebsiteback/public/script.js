document.getElementById('create-account-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = e.target;
    fetch(form.action, {
        method: form.method,
        body: new URLSearchParams(new FormData(form)),
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        if (data.includes('OTP sent')) {
            document.getElementById('create-account-form').style.display = 'none';
            document.getElementById('otp-verification-form').style.display = 'block';
        }
    })
    .catch(err => console.error(err));
});
