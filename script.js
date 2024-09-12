document.getElementById('map-link').addEventListener('click', function(event) {
    event.preventDefault();

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const googleMapsMobileUrl = 'geo:0,0?q=Vrindavanam+Convention+Center+Palode';
    const googleMapsDesktopUrl = 'https://www.google.com/maps?q=Vrindavanam+Convention+Center+Palode';

    const conventionNameElement = document.getElementById('convention-name');
    conventionNameElement.textContent = "Vrindavanam Convention Center (Aster Hall), Palode";
    conventionNameElement.style.display = "block";

    if (isMobile) {
        window.location.href = googleMapsMobileUrl;
    } else {
        window.open(googleMapsDesktopUrl, '_blank');
    }
});
