// for retriving User details in the form on the profile


// Retrieve data from localStorage
let fullname = localStorage.getItem('fullname');
let email = localStorage.getItem('email');
let proffession = localStorage.getItem('proffession');

// Display the data
if (fullname && email) {
    document.getElementById('userName').textContent = ` ${fullname}`;
    document.getElementById('teacherBio').textContent = ` ${email}`;
    document.getElementById('teacherGrade').textContent = ` ${proffession}`;


} else {
  window.location.href = 'formErr.html';
}

// end of retriving user data from form

function search_student() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('teacherStudentMini');
  
    for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      }
      else {
        x[i].style.display = "list-item";
      }
    }
  }

  function showprofile(){
    document.getElementById('miniProfile').style.display="block"
  }

  
  