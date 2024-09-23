
//=======================================================//
//=======SIDE-BAR TOGGLE FUNCTION FOR THE DASHBOARD=======//
document.getElementById('menu-toggle').addEventListener('change', function () {
    var sidebar = document.getElementById('sidebar');
    if (this.checked) {
        sidebar.style.width = '250px';
    } else {
        sidebar.style.width = '0';
    }
});
//==============================================================//
//=======END OF SIDE-BAR TOGGLE FUNCTION FOR THE DASBOARD=======//

//=================================================//
//=======PROFILE TOOLTIP JAVASCRIPT FUNCTION=======//
document.addEventListener("DOMContentLoaded", function() {
    const userDp = document.getElementById('userDp');//Getting 'userDp' by Id
    const tooltip = document.getElementById('profileTooltip');//Getting 'profileTooltip' by Id

    userDp.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        if (tooltip.classList.contains('active')) {
            tooltip.classList.remove('active');
            tooltip.classList.add('fade-out');
            setTimeout(() => {
                tooltip.classList.remove('fade-out');
                tooltip.style.display = 'none';
            }, 300); // Match the duration of the fadeOutScale animation
        } else {
            tooltip.style.display = 'grid';
            setTimeout(() => {
                tooltip.classList.add('active');
            }, 10); // Small delay to ensure the display change is registered
        }
    });

    //Hide the tooltip if clicked outside
    document.addEventListener('click', function(event) {
        if (!userDp.contains(event.target) && !tooltip.contains(event.target)) {
            tooltip.classList.remove('active');
            tooltip.classList.add('fade-out');
            setTimeout(() => {
                tooltip.classList.remove('fade-out');
                tooltip.style.display = 'none';
            }, 300); // Match the duration of the fadeOutScale animation
        }
    });
});

//========================================================//
//=======END OF PROFILE TOOLTIP JAVASCRIPT FUNCTION=======//


//========================================================//
//===========NOTIFY TOOLTIP JAVASCRIPT FUNCTION==========//
document.addEventListener("DOMContentLoaded", function() {
    const notify = document.getElementById('notify');//Getting 'notify' by Id
    const tooltip = document.getElementById('notifyTooltip');//Getting 'notifyTooltip' by Id

    notify.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        if (tooltip.classList.contains('active')) {
            tooltip.classList.remove('active');
            tooltip.classList.add('fade-out');
            setTimeout(() => {
                tooltip.classList.remove('fade-out');
                tooltip.style.display = 'none';
            }, 300); // Match the duration of the fadeOutScale animation
        } else {
            tooltip.style.display = 'grid';
            setTimeout(() => {
                tooltip.classList.add('active');
            }, 10); // Small delay to ensure the display change is registered
        }
    });

    //Hide the tooltip if clicked outside
    document.addEventListener('click', function(event) {
        if (!notify.contains(event.target) && !tooltip.contains(event.target)) {
            tooltip.classList.remove('active');
            tooltip.classList.add('fade-out');
            setTimeout(() => {
                tooltip.classList.remove('fade-out');
                tooltip.style.display = 'none';
            }, 300); // Match the duration of the fadeOutScale animation
        }
    });
});

//==============================================================//
//===========END OF NOTIFY TOOLTIP JAVASCRIPT FUNCTION==========//

//===========================================//
// =======PROFILE EDIT FUNCTION CODE========//

// adding a close and open button for the profile edit
document.querySelector('.pfTooltipDp').addEventListener('click', function(){
    document.querySelector('.profile-container').style.display='grid';
});
document.querySelector('.closePfEdit').addEventListener('click', function(){
    document.querySelector('.profile-container').style.display='none'
});


// file reader api to read the profile img from user device img picker
document.getElementById('profilePicture').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const profileImage = document.getElementById('profileImage');
    
    if (file) {
      const reader = new FileReader();
      profileImage.style.border='solid 5px green'
      reader.onload = function(e) {
        profileImage.src = e.target.result;
      };
  
      reader.readAsDataURL(file);
    }
  });
  

//submit button to update changes
  document.getElementById("profileForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    alert("Profile Updated Successfully!");
  
    // Reset button animation
    const button = document.querySelector('.btn-save');
    let pfEdit = document.querySelector('.profile-container');
    pfEdit.style.display='none'
    button.classList.add('saved');
    button.innerHTML = 'Saved!';
  
    setTimeout(() => {
      button.classList.remove('saved');
      button.innerHTML = 'Save Changes';
    }, 3000);
  });
  //================================================//
// =======END OF PROFILE EDIT FUNCTION CODE========//
