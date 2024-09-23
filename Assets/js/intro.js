//==========================================================//
// =======Loads Tour immediately page is done loading=======//
document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('[data-step]');
    let currentStep = 0;
    const guide = document.getElementById('guide');
    const tooltip = document.getElementById('tooltip');
    // Check if the user has already completed or skipped the tour
    if (localStorage.getItem('tourCompleted') === 'true') {
        return; // Tour has already been completed, so do nothing
    }

 

    // Start the tour after signup is complete
    startTour();

    function startTour() {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('skipBtn').style.display = 'block';
        showStep(currentStep);
    }

    function showStep(stepIndex) {
        // Clear previous highlight and hide guide
        if (currentStep > 0) {
            steps[currentStep - 1].classList.remove('highlight');
            guide.classList.remove('show');
        }

        // If we've completed the tour, remove the overlay and button
        if (stepIndex >= steps.length) {
            endTour();
            return;
        }

        // Highlight the current step element
        const element = steps[stepIndex];
        element.classList.add('highlight');

        // Display the guide
        const guideText = element.getAttribute('data-guide');
        const rect = element.getBoundingClientRect();
        guide.textContent = guideText;
        guide.style.top = `${rect.top - -50}px`;
        guide.style.left = `${rect.left + (rect.width / 2) - 100}px`;
        guide.classList.add('show');
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function nextStep() {
        currentStep++;
        showStep(currentStep);
    }

    function endTour() {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('skipBtn').style.display = 'none';
        if (steps[currentStep - 1]) {
            steps[currentStep - 1].classList.remove('highlight');
            guide.classList.remove('show');
        }
        localStorage.setItem('tourCompleted', 'true');

    }

    // Skip button listener
    document.getElementById('skipBtn').addEventListener('click', function () {
        endTour();
    });

    // Proceed to the next step after a delay or a specific user action (e.g., clicking on the highlighted element)
    steps.forEach((element, index) => {
        element.addEventListener('click', function () {
            nextStep();
        });
    });
});
