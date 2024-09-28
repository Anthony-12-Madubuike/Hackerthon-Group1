// //=======================================//
// //=======FLOATING BUTTON FUNCTION=======//

// //GET FLOATING BUTTON BY ID
// const button = document.getElementById('floating-button');
// let isDragging = false;
// let offsetX = 0;
// let offsetY = 0;

// button.addEventListener('mousedown', startDragging);
// button.addEventListener('touchstart', startDragging, { passive: false });

// function startDragging(e) {
//     e.preventDefault();
//     isDragging = true;
//     button.classList.add('dragging');
    
//     if (e.type === 'mousedown') {
//         offsetX = e.clientX - button.offsetLeft;
//         offsetY = e.clientY - button.offsetTop;
//         document.addEventListener('mousemove', onDrag);
//         document.addEventListener('mouseup', stopDragging);
//     } else if (e.type === 'touchstart') {
//         offsetX = e.touches[0].clientX - button.offsetLeft;
//         offsetY = e.touches[0].clientY - button.offsetTop;
//         document.addEventListener('touchmove', onDrag, { passive: false });
//         document.addEventListener('touchend', stopDragging);
//     }
// }

// function onDrag(e) {
//     if (!isDragging) return;

//     let clientX, clientY;
//     if (e.type === 'mousemove') {
//         clientX = e.clientX;
//         clientY = e.clientY;
//     } else if (e.type === 'touchmove') {
//         clientX = e.touches[0].clientX;
//         clientY = e.touches[0].clientY;
//     }

//     // Calculate new position
//     let newLeft = clientX - offsetX;
//     let newTop = clientY - offsetY;

//     // Ensure the button stays within the screen boundaries
//     newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - button.offsetWidth));
//     newTop = Math.max(0, Math.min(newTop, window.innerHeight - button.offsetHeight));

//     button.style.left = `${newLeft}px`;
//     button.style.top = `${newTop}px`;
// }

// function stopDragging() {
//     if (!isDragging) return;

//     isDragging = false;
//     button.classList.remove('dragging');

//     // Snap the button to the closest edge horizontally
//     const middleX = window.innerWidth / 2;
//     const buttonCenterX = button.offsetLeft + button.offsetWidth / 2;
//     if (buttonCenterX < middleX) {
//         button.style.left = '0px'; // Snap to left edge
//     } else {
//         button.style.left = `${window.innerWidth - button.offsetWidth}px`; // Snap to right edge
//     }

//     document.removeEventListener('mousemove', onDrag);
//     document.removeEventListener('mouseup', stopDragging);
//     document.removeEventListener('touchmove', onDrag);
//     document.removeEventListener('touchend', stopDragging);
// }
// //==============================================//
// //=======END OF FLOATING BUTTON FUNCTION=======//


// // document.getElementById('menu-toggle').addEventListener('change', function () {
// //     var sidebar = document.getElementById('sidebar');
// //     if (this.checked) {
// //         sidebar.style.width = '250px';
// //     } else {
// //         sidebar.style.width = '0';
// //     }
// // });

