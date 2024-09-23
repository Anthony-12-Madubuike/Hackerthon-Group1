//================================//
//=======SEARCH-BAR FUNCTION=====//
function search_student() {
  let input = document.getElementById('searchInfo').value;
  input = input.toLowerCase();
  let contacts = document.getElementsByClassName('contactCont')
  [0].getElementsByClassName('contact');

  for (i = 0; i < contacts.length; i++) {
    let contactText = contacts[i].textContent || contacts[i].innerText;
    if (!contactText.toLowerCase().includes(input)) {
      contacts[i].style.display = 'none'
    }
    else {
      contacts[i].style.display = 'block';


    }
  }
}
//=======================================//
//=======END OF SEARCH-BAR FUNCTION=====//

// fix this because it id for the responsivity of my page


//====================================================================//
//=======TOGGLING FUNCTION 'HIDE, SHOW' OF CONTACT AND contactDM=====//
function showChats() {
  let dm = document.querySelector('.contactDM');
  dm.style.display = 'none';
  
  //Disabling the hide function for contactDM on screen nmin 675px
  if (window.innerWidth >= 675) {
    dm.style.display = 'grid';
  }else{
    dm.style.display = 'grid';
    document.querySelector('.friendschats').style.display='none';

  }
  // document.body.id('Onclickbody');


  let chat = document.querySelector('.friendschats')
  chat.style.display = 'grid'
  chat.classList.add('fade-in');
  setTimeout(() => {
    chat.classList.remove('fade-in')
  }, 5000);
}

//===========================================================================//
//=======END OF TOGGLING FUNCTION 'HIDE, SHOW' OF CONTACT AND contactDM=====//

// ====================================================//
//=======chat.html PAGE RESPONSIBILITY FUNCTION=======//
function checkWindowSize() {
  // GETTING ELEMENTS
  let dm = document.querySelector('.contactDM');
  let chat = document.querySelector('.friendschats');
  let contactDm = document.querySelector('.contactDM');
  let friendName = document.querySelector('.pfName')
  //CONDITION FOR DEVICE WIDTH GREATER THAN 675px
  if (window.innerWidth >= 675) {
    dm.style.display = 'block'
    chat.style.display = 'grid'
  }
  else if (dm.style.display == 'none') {
    chat.style.display = 'grid';
  }
  //CONDITION FOR DEVICE WIDTH LESS THAN 282px
  if (window.innerWidth <= 282 && friendName.length > 5) {
    friendName.innerText = "..."
  }
}


window.addEventListener('resize', checkWindowSize);
checkWindowSize();
// ===========================================================//
//=======END OF chat.html PAGE RESPONSIBILITY FUNCTION=======//



// Message box file accessor button 
document.querySelector('#openFileButton').addEventListener('click', function () {
  document.querySelector('#fileInput').click();
});

document.querySelector('#fileInput').addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
    console.log('File selected:', file.name);
    // You can now access the file properties or read its content here
  }
});
// End of message box file accessor button 



//=================================//
//=======USER ACTIVE STATUS=======//
function updateStatus(element, status) {
  // Remove all previous status classes
  element.classList.remove('online', 'offline', 'away');

  // Add the new status class
  element.classList.add(status);
}

// Usage example
const contactElement = document.querySelector('.contact');
updateStatus(contactElement, 'online'); // Possible values: 'online', 'offline', 'away'

//========================================//
//=======END OF USER ACTIVE STATUS=======//

