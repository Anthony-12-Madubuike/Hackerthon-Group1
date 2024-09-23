// //=================================================//
// // =======ONLOAD FUNCTION FOR FORM ANIMATION=======//
document.addEventListener("DOMContentLoaded", () => {
    // GETTING INPUT BY CLASS
    const inputs = document.querySelectorAll(".input-group input");

    // ADDING A CLASS OF ACTIVE FOR EACH INPUT
    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.parentElement.classList.add("active");
        });
        // REMOVING THE CLASS ADDED PREVIOUSLY, WHEN FUNCTION HAS BEEN CARRIED OUT
        input.addEventListener("blur", () => {
            if (input.value === "") {
                input.parentElement.classList.remove("active");
            }
        });
    });
});
// //=========================================================//
// // =======END OF ONLOAD FUNCTION FOR FORM ANIMATION=======//


// =======INPUT VALIDATION: GETTING OF INPUT=======//
document.getElementById('fullname').addEventListener('input', function () {
    validateInput(this);
});

document.getElementById('email').addEventListener('input', function () {
    validateEmail(this);
});

document.getElementById('password').addEventListener('input', function () {
    validatePassword(this);
});
// ======= END OF INPUT VALIDATION: GETTING OF INPUT=======//


// FUNCTION WORKS WHEN INPUT HAVE'NT BEEN FILLED AND WHEN INPUTS HAVE BEEN FILLED CORRECTLY
function validateInput(input) {
    const inputGroup = input.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    if (input.value.trim() === '') {
        inputGroup.classList.add('error');
        inputGroup.classList.remove('success');
    } else {
        inputGroup.classList.remove('error');
        inputGroup.classList.add('success');

    }
}

// FUNCTION FOR CHECKING IF USER INPUTED AN EMAIL IN THE RIGHT FORMAT
function validateEmail(email) {
    const inputGroup = email.parentElement;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        inputGroup.classList.add('error');
        inputGroup.classList.remove('success');
    } else {
        inputGroup.classList.remove('error');
        inputGroup.classList.add('success');
    }
}

// CHECKING THE STRENGTH OF PASSWORD OF USERS
function validatePassword(password) {
    const inputGroup = password.parentElement;
    const strengthBar = document.getElementById('password-strength-bar');
    const strength = calculatePasswordStrength(password.value.trim());

    inputGroup.classList.remove('error');
    inputGroup.classList.add('success');

    if (strength === 0) {
        inputGroup.classList.add('error');
        strengthBar.style.width = '0%';
        strengthBar.className = 'password-strength-bar';
    } else if (strength === 1) {
        strengthBar.style.width = '33%';
        strengthBar.className = 'password-strength-bar strength-weak';
    } else if (strength === 2) {
        strengthBar.style.width = '66%';
        strengthBar.className = 'password-strength-bar strength-medium';
    } else if (strength === 3) {
        strengthBar.style.width = '100%';
        strengthBar.className = 'password-strength-bar strength-strong';
    }
}

function calculatePasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[\W]/.test(password)) strength++;

    return strength;
}



// FUNCTION FOR THE SUBMITING OF THE FORM
document.querySelector('#registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way


    // Get form data
    let fullName = document.querySelector('#fullname').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    // Generating of user Id
    let userId = Math.floor(Math.random() * 1000000);
    let AdminNumValue = document.querySelector('#AdminNum').value;
    let generatedAdminNum =  localStorage.getItem('adminNo');
    if (AdminNumValue===generatedAdminNum){
    window.location.href='dashboard.html'
        
    }
    else{
        document.getElementById('errorno').style.display='block';
    }
     // Save data to localStorage
     localStorage.setItem('userId', userId);
     localStorage.setItem('fullname', fullName);
     localStorage.setItem('email', email);
     localStorage.setItem('password', password);



   
});
document.querySelector('.adminNoBtn').addEventListener('click', function(){
    let generatedAdminNum =  localStorage.getItem('adminNo');
    alert(generatedAdminNum);
})
