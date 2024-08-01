function goToPage(pageUrl) {
    window.open(pageUrl, '_blank');
}

function showGoogle() {
    const googleImg = document.getElementById('google-img');
    const googleButton = document.getElementById('google-button');

    googleImg.src = 'google/GAY.jpg';
    googleButton.style.display = 'inline-block';
    googleImg.onclick = null;
}

document.addEventListener("DOMContentLoaded", function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselItems = document.querySelectorAll('.carousel-item');

    carouselContainer.addEventListener('scroll', function() {
        carouselItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.left >= 0 && rect.right <= window.innerWidth) {
                item.classList.add('active');
                item.classList.remove('inactive');
            } else {
                item.classList.remove('active');
                item.classList.add('inactive');
            }
        });
    });
});
