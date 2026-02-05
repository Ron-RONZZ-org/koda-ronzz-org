jQuery.noConflict();

(function ($) {
    var image = $('.jarallax-img');
    if (!image) return;

    var options = {
        disableParallax: /iPad|iPhone|iPod|Android/,
        disableVideo: /iPad|iPhone|iPod|Android/,
        speed: 0.1,
    };

    image.imagesLoaded(function () {
        image.parent().jarallax(options).addClass('initialized');
    });
})(jQuery);

(function ($) {
    'use strict';
    $('.featured-posts').owlCarousel({
        dots: false,
        margin: 30,
        nav: true,
        navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M20.547 22.107L14.44 16l6.107-6.12L18.667 8l-8 8 8 8 1.88-1.893z"></path></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M11.453 22.107L17.56 16l-6.107-6.12L13.333 8l8 8-8 8-1.88-1.893z"></path></svg>',
        ],
        responsive: {
            0: {
                items: 1,
                slideBy: 1,
            },
            768: {
                items: 3,
                slideBy: 3,
            },
            992: {
                items: 4,
                slideBy: 4,
            },
        },
    });
})(jQuery);

document.addEventListener('DOMContentLoaded', function () {
    const targetContainer = document.getElementById('markmap-button-container');
    const metaTag = document.querySelector('meta[name="markmap-url"]');
    const urlValue = metaTag && metaTag.getAttribute('content');
    
    if (!targetContainer || !metaTag || !urlValue) return;
    
    try {
        const parsedUrl = new URL(urlValue);
        if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
            console.warn('Markmap URL must use http or https protocol:', urlValue);
            return;
        }
    } catch (e) {
        console.warn('Invalid markmap URL provided:', urlValue);
        return;
    }
    
    const linkElement = document.createElement('a');
    linkElement.href = urlValue;
    linkElement.className = 'markmap-button';
    linkElement.target = '_blank';
    linkElement.rel = 'noopener noreferrer';
    linkElement.textContent = 'Vidigi markmapon';
    
    targetContainer.appendChild(linkElement);
});
