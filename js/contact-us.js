function showLinksForIcon() {
    const element = document.querySelector('.links-in-icon');
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}
function goToHome() {
    location.href = 'home.html'
}