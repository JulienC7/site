
let form = document.querySelector('form');
let email = document.querySelector('#email');
let pseudo = document.querySelector('#pseudo');
let password = document.querySelector('#password');
let passwordConfirm = document.querySelector('#password2');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('Envoi du formulaire détecté!');

        if (pseudo.value.length > 6) {
            pseudo.classList.remove('input-error');
            pseudo.classList.add('input-success');
            console.log("Pseudo valide");
        } else {
            pseudo.classList.add('input-error');
            pseudo.classList.remove('input-success');
            console.log("Pseudo invalide");
        }

        if (email.value === '') {
            email.classList.add('input-error');
            email.classList.remove('input-success');
            console.log("Email invalide");
        } else {
            email.classList.add('input-success');
            email.classList.remove('input-error');
            console.log("Email valide");
        }

        let passCheck = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{10,}$"
        );
        if (password.value.length > 10 && passCheck.test(password.value)) {
            password.classList.remove('input-error');
            password.classList.add('input-success');
            console.log("Mot de passe valide");
        } else {
            password.classList.add('input-error');
            password.classList.remove('input-success');
            console.log("Mot de passe invalide");
        }

        if (password.value === passwordConfirm.value && password.value !== '') {
            passwordConfirm.classList.remove('input-error');
            passwordConfirm.classList.add('input-success');
            console.log("Confirmation du mot de passe valide");
        } else {
            passwordConfirm.classList.add('input-error');
            passwordConfirm.classList.remove('input-success');
            console.log("Confirmation du mot de passe invalide");
        }
    });
