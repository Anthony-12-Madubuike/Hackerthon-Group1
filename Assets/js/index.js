// for retriving User details in the form on the profile

// Retrieve data from localStorage
let fullname = localStorage.getItem('fullname');
let email = localStorage.getItem('email');
let userId = localStorage.getItem('userId');
// let proffession = localStorage.getItem('proffession');
// Display the data
document.querySelector('.userId').textContent = 'UID: Blk'+userId;

document.querySelectorAll('#userName').forEach((element) => {
    element.textContent=fullname;
})


document.querySelector('.logout').addEventListener('click', function(event){
    event.preventDefault(); // Prevent the form from submitting the traditional way
    localStorage.clear();
    window.location.href = 'signin.html';

    
})

// end of retriving user data from form
