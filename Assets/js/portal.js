//================================//
//=======SEARCH-BAR FUNCTION=====//
function search_student() {
    let input = document.getElementById('searchInfo').value;
    input = input.toLowerCase();
    let contacts = document.getElementsByClassName('tableBody')
    [0].getElementsByClassName('searchCont')[0].getElementsByClassName('searchs')[0].getElementsByClassName('searchItem');
    // if(input== ''){
    //     for(let i =0; i<contacts.length; i++){
    //         contacts[i].style.display='table-row'
    //     }
    //     return;
    // }
    for (i = 0; i < contacts.length; i++) {
      let contactText = contacts[i].textContent || contacts[i].innerText;
      if (!contactText.toLowerCase().includes(input)) {
        contacts[i].style.display = 'none'
      }else{
        contacts[i].style.display = 'table-row'
       

      }
      
    }
  }
  //=======================================//
  //=======END OF SEARCH-BAR FUNCTION=====//

// Function to sort table rows alphabetically based on the Name column (or any other column)
// Function to sort table rows alphabetically based on the Name column (adjust index if sorting another column)
function sortTableAlpha() {
    let tableBody = document.querySelector('.tableBody .searchCont tbody'); // Get the tbody of the table
    let rows = Array.from(tableBody.querySelectorAll('.searchItem')); // Get all rows with class 'searchItem'

    // Sort rows alphabetically by the Name column (adjust index if Name column isn't first)
    rows.sort((a, b) => {
        let nameA = a.querySelector('td:nth-child(2)').innerText.toLowerCase(); // Name is in 2nd column
        let nameB = b.querySelector('td:nth-child(2)').innerText.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    // Append sorted rows back to the table
    rows.forEach(row => tableBody.appendChild(row)); // Re-attach rows in sorted order
}

// Event listener to trigger sorting when 'Alpha' option is selected
document.querySelector('input[name="sort"][value="Alpha"]').addEventListener('change', function() {
    if (this.checked) {
        sortTableAlpha(); // Call the sorting function
    }
});


//===================================//
// =======DROP DOWN FUNCTIONS=======//
const dropdownBtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

// Toggle dropdown with animations
dropdownBtn.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent click event from bubbling to document
    let dropDownClose = document.querySelector('.up');
    let dropDownOpen = document.querySelector('.down');
    dropDownOpen.style.display = 'block';

    if (dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
        dropdownContent.classList.add('hide');
        dropDownClose.style.display = 'none';
        dropDownOpen.style.display = 'block';

    } else {
        dropdownContent.classList.remove('hide');
        dropdownContent.classList.add('show');
        dropDownClose.style.display = 'block';
        dropDownOpen.style.display = 'none';
    }
});

// Hide dropdown when clicking outside
document.addEventListener('click', function (event) {
    let dropDownClose = document.querySelector('.up');
    let dropDownOpen = document.querySelector('.down');

    if (!dropdownContent.contains(event.target) && !dropdownBtn.contains(event.target)) {
        dropdownContent.classList.remove('show');
        dropdownContent.classList.add('hide');
        dropDownClose.style.display = 'none';
        dropDownOpen.style.display = 'block';
    }
});

//==========================================//
// =======END OF DROP DOWN FUNCTIONS=======//

//=====================================//
// =======UID SCANNING FUNCTION=======//
document.querySelector('.scan').addEventListener('click', function () {
    let Scanner = document.querySelector('.scanner-container');
    Scanner.style.display = 'grid';

});

let stream; //Store the media stream
document.getElementById('scanButton').addEventListener('click', function () {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Access the webcam
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (mediaStream) {
                // Get the video element
                stream = mediaStream; //store stream
                const video = document.getElementById('webcam');
                video.style.display = 'block'
                // Set the source of the video element to the webcam stream
                video.srcObject = mediaStream;

                // Play the video element
                video.play();
            })
            .catch(function (error) {
                console.error("Error accessing webcam:", error);
            });
    } else {
        alert("Sorry, your browser does not support webcam access.");
    }


    // Trigger the scanner and show status
    document.getElementById('statusMessage').textContent = "Scanning...";
    setTimeout(function () {
        document.getElementById('scannerFrame').classList.add('success');
        let statusMessage = document.getElementById('statusMessage').textContent = "Scan successful!";
        if (statusMessage === 'Scan successful!') {
            let statusMessage = document.getElementById('statusMessage');
            statusMessage.style.color = 'green';
        }
        document.getElementById('userInfo').style.display = 'block';
    }, 3000);

});

function stopWebcam() {
    if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
    }
}

document.querySelector('.closeScanner').addEventListener('click', function () {
    let sannerParent = document.querySelector('.scanner-container');
    sannerParent.style.display = 'none';
    stopWebcam();
    document.getElementById('userInfo').style.display = 'none';
    document.getElementById('statusMessage').textContent = "";

    let qrCodeIcon = document.getElementById('qrCode').style.fill = '#fff';


})

//============================================//
// =======END OF UID SCANNING FUNCTION=======//


//==========================================//
// ========SPEECH SYNTHESIS FUNCTION=======//
let ttsEnabled = false;
let isSpeaking = false;

const btnToggleTTS = document.querySelector('.speechTxt');
// Function to handle text selection and speech
function handleTextSelection() {

    if (!ttsEnabled) return;

    const selectedText = window.getSelection().toString().trim();
    if (selectedText.length > 0) {
        speakText(selectedText);
    }
}

// Function to speak the highlighted text
function speakText(text) {
    if (isSpeaking) {
        window.speechSynthesis.cancel(); // Stop any current speech
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = function () {
        isSpeaking = false; // Mark speech as finished
    };

    isSpeaking = true;
    window.speechSynthesis.speak(utterance); // Speak the text
}

// Toggle TTS activation on button click
btnToggleTTS.addEventListener('click', function () {
    ttsEnabled = !ttsEnabled; // Toggle TTS activation
    const stopSpeech = document.querySelector('.speecCancelCont').style.display = 'block';

    if (ttsEnabled) {
        // btnToggleTTS.innerHTML = 'Deactivate Text-to-Speech';
        alert('Text-to-Speech activated! Highlight any text to hear it aloud.');
        document.addEventListener('mouseup', handleTextSelection); // Listen for text selection

    } 
});

document.querySelector('.speecCancelCont').addEventListener('click', function () {
    window.speechSynthesis.cancel(); // Stop any ongoing speech
    alert('Text-to-Speech deactivated!');
    document.removeEventListener('mouseup', handleTextSelection); // Stop listening for text selection
    const stopSpeech = document.querySelector('.speecCancelCont').style.display = 'none';

})
//=================================================//
// ========END OF SPEECH SYNTHESIS FUNCTION=======//

