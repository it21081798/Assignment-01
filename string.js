
document.addEventListener('DOMContentLoaded', function () {
    var toggleIcon = document.getElementById('toggleIcon');
    var paragraph = document.getElementById('hiddenParagraph');

    toggleIcon.addEventListener('click', function () {
        if (paragraph.style.display === 'none' || paragraph.style.display === '') {
            paragraph.style.display = 'block';
            toggleIcon.innerHTML = '<i class="fas fa-minus"></i>';
        } else {
            paragraph.style.display = 'none';
            toggleIcon.innerHTML = '<i class="fas fa-plus"></i>';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var toggleIcon = document.getElementById('toggleIcon2');
    var paragraph = document.getElementById('hiddenParagraph2');

    toggleIcon.addEventListener('click', function () {
        if (paragraph.style.display === 'none' || paragraph.style.display === '') {
            paragraph.style.display = 'block';
            toggleIcon.innerHTML = '<i class="fas fa-minus"></i>';
        } else {
            paragraph.style.display = 'none';
            toggleIcon.innerHTML = '<i class="fas fa-plus"></i>';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var toggleIcon = document.getElementById('toggleIcon3');
    var paragraph = document.getElementById('hiddenParagraph3');

    toggleIcon.addEventListener('click', function () {
        if (paragraph.style.display === 'none' || paragraph.style.display === '') {
            paragraph.style.display = 'block';
            toggleIcon.innerHTML = '<i class="fas fa-minus"></i>';
        } else {
            paragraph.style.display = 'none';
            toggleIcon.innerHTML = '<i class="fas fa-plus"></i>';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var toggleIcon = document.getElementById('toggleIcon4');
    var paragraph = document.getElementById('hiddenParagraph4');

    toggleIcon.addEventListener('click', function () {
        if (paragraph.style.display === 'none' || paragraph.style.display === '') {
            paragraph.style.display = 'block';
            toggleIcon.innerHTML = '<i class="fas fa-minus"></i>';
        } else {
            paragraph.style.display = 'none';
            toggleIcon.innerHTML = '<i class="fas fa-plus"></i>';
        }
    });
});

var currentIndex = 0;

function swapImage() {
    var galleryItems = document.querySelectorAll('.gallery-item');
    
    
    galleryItems[currentIndex].style.display = 'none';

    
    currentIndex = (currentIndex + 1) % galleryItems.length;

    
    galleryItems[currentIndex].style.display = 'block';
}



function swapCard(cardId) {
    var container = document.getElementById('cardContainer');
    var cards = container.getElementsByClassName('card');

    for (var i = 0; i < cards.length; i++) {
        if (cards[i].id === cardId) {
            var nextIndex = (i + 1) % cards.length;

            
            var currentImage = cards[i].querySelector('.card-image');
            var nextImage = cards[nextIndex].querySelector('.card-image');
            var currentContent = cards[i].querySelector('.card-content');
            var nextContent = cards[nextIndex].querySelector('.card-content');

            var tempImageSrc = currentImage.src;
            currentImage.src = nextImage.src;
            nextImage.src = tempImageSrc;

            var tempContentHTML = currentContent.innerHTML;
            currentContent.innerHTML = nextContent.innerHTML;
            nextContent.innerHTML = tempContentHTML;

            break;
        }
    }
}

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
