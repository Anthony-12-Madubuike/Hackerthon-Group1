
// Qr code scanner
// Qr code: accessing device Webcam
document.getElementById('qrCode').addEventListener('click', function () {
    let Scanner = document.querySelector('.scanner-container');
    Scanner.style.display = 'grid';
    document.getElementById('qrCode').style.fill = '#7ec3fa';

});

let stream = null //Store the media stream
document.getElementById('scanButton').addEventListener('click', function () {
    let permissionGranted = confirm('Block-Chain Academy wants to acess your camera. Do you allow?');
    if (permissionGranted) {

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
            // Trigger the scanner and show status
            document.getElementById('statusMessage').textContent = "Scanning...";
            // Example of changing the frame color based on status
            setTimeout(function () {
                document.getElementById('scannerFrame').classList.add('success');
                let statusMessage = document.getElementById('statusMessage').textContent = "Scan successful!";
                if (statusMessage === 'Scan successful!') {
                    let statusMessage = document.getElementById('statusMessage');
                    statusMessage.style.color = 'green';
                }
                document.getElementById('userInfo').style.display = 'block';
            }, 3000);

        } else {
            alert("Sorry, your browser does not support webcam access.");
        }

    }

});

function stopWebcam() {
    if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        const video = document.getElementById('webcam');
        video.pause();
        video.srcObject = null

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

