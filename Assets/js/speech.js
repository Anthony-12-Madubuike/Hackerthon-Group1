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

     } //else {
    //     window.speechSynthesis.cancel(); // Stop any ongoing speech
    //     btnToggleTTS.innerHTML = 'Activate Text-to-Speech';
    //     alert('Text-to-Speech deactivated!');
    //     document.removeEventListener('mouseup', handleTextSelection); // Stop listening for text selection
    // }
});
document.querySelector('.speecCancelCont').addEventListener('click', function () {
    window.speechSynthesis.cancel(); // Stop any ongoing speech
    alert('Text-to-Speech deactivated!');
    document.removeEventListener('mouseup', handleTextSelection); // Stop listening for text selection
    const stopSpeech = document.querySelector('.speecCancelCont').style.display = 'none';

})
