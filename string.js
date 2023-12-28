document.addEventListener('DOMContentLoaded', function () {
    var toggleIcon = document.getElementById('toggleIcon');
    var paragraph = document.getElementById('hiddenParagraph');

    toggleIcon.addEventListener('click', function () {
        if (paragraph.style.display === 'none') {
            paragraph.style.display = 'block';
        } else {
            paragraph.style.display = 'none';
        }
    });
});

