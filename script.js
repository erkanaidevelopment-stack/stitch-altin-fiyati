document.querySelectorAll('.price-box').forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.transform = 'scale(1.1)';
        box.style.transition = '0.3s';
    });
    box.addEventListener('mouseout', () => {
        box.style.transform = 'scale(1)';
    });
});