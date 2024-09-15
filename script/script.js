document.addEventListener('DOMContentLoaded', function() {
    const imageHover = document.querySelectorAll('.image-hover');

    imageHover.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.20)';
            this.style.zIndex = '1';
        });

        item.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '';
        });
    });
});
