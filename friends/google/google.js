function goToPage(pageUrl) {
    window.open(pageUrl, '_blank');
}

function showGoogle() {
    const googleImg = document.getElementById('google-img');
    const gayImg = document.querySelector('.gay');

    googleImg.style.display = 'none';
    gayImg.style.display = 'inline';
}
