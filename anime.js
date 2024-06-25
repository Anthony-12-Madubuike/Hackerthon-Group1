import AOS from 'aos';
import 'aos/dist/aos.css';
Aos.init();


document.getElementById('menu-toggle').addEventListener('change', function () {
    var sidebar = document.getElementById('sidebar');
    if (this.checked) {
        sidebar.style.width = '250px';
    } else {
        sidebar.style.width = '0';
    }
});

