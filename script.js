document.getElementById('map-link').addEventListener('click', function(event) {
    event.preventDefault();

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const googleMapsMobileUrl = 'https://www.google.com/maps/place/Vrindavanam+Convention+Centre/@8.7295557,77.0279169,17z/data=!3m1!4b1!4m6!3m5!1s0x3b05cf6e7ad35cad:0xbce81987a4447f11!8m2!3d8.7295557!4d77.0279169!16s%2Fg%2F11ggr0hnmj?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D';
    const googleMapsDesktopUrl = 'https://www.google.com/maps/place/Vrindavanam+Convention+Centre/@8.7295557,77.0279169,17z/data=!3m1!4b1!4m6!3m5!1s0x3b05cf6e7ad35cad:0xbce81987a4447f11!8m2!3d8.7295557!4d77.0279169!16s%2Fg%2F11ggr0hnmj?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D';

    const conventionNameElement = document.getElementById('convention-name');
    conventionNameElement.textContent = "Vrindavanam Convention Center (Aster Hall), Palode";
    conventionNameElement.style.display = "block";

    if (isMobile) {
        window.location.href = googleMapsMobileUrl;
    } else {
        window.open(googleMapsDesktopUrl, '_blank');
    }
});
