
// //=================================================//
// // =======ONLOAD FUNCTION FOR FORM ANIMATION=======//
document.addEventListener("DOMContentLoaded", () => {
    //=======GETTING INPUT GROUP BY CLASS=======//
    const inputs = document.querySelectorAll(".input-group input");

    
    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.parentElement.classList.add("active");
        });

        input.addEventListener("blur", () => {
            if (input.value === "") {
                input.parentElement.classList.remove("active");
            }
        });
    });
});
//=================================================//
// =======END OF ONLOAD FUNCTION FOR FORM ANIMATION=======//

//=============================//
//=======FORM VALIDATION=======//

//========GETTING FULLNAME ID=======//
document.getElementById('email').addEventListener('input', function () {
    validateEmail(this);
});





// ======= EMAIL VALIDATION======//
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
// =======END OF EMAIL VALIDATION======//




// //============================================================//
// // ========SAVING OF USER FORM DETAILS TO LOCAL STORAGE=======//
document.querySelector('#registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    // GETING USER DETAIL
    const emailInput = document.querySelector('#email').value;
    const passwordInput = document.querySelector('#password').value;
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // GENERATING UID
    // let userId = Math.floor(Math.random() * 1000000000)

    // // SAVE TO LOCAL STORAGE
    // localStorage.setItemItem('userId', userId);
    // localStorage.getItemItem('fullname');
    

    if (emailInput === storedEmail && passwordInput === storedPassword) {
        alert('Login successful!');
        // Redirect to index/dashboard page with the username passed in the URL
        window.location.href = `index.html?username=${localStorage.getItem('fullname')}`;
      } else {
        alert('Incorrect email or password.');
      }
     // REDIRECT TO dashboard.html

    // window.location.href='dashboard.html'
      
});
// //===================================================================//
// // ========END OF SAVING OF USER FORM DETAILS TO LOCAL STORAGE=======//

