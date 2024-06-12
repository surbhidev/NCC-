document.addEventListener('DOMContentLoaded', (event) => {
    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });
});

$(document).ready(function(){
    $('#carouselExampleIndicators').carousel({
        interval: 3000 // 3 seconds
    });
});