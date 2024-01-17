document.addEventListener('DOMContentLoaded', function() {
    var iframe = document.querySelector('.youtube-container iframe');
    var isScrolling;

    // Disable pointer events while scrolling
    window.addEventListener('scroll', function() {
        clearTimeout(isScrolling);
        iframe.style.pointerEvents = 'none';

        isScrolling = setTimeout(function() {
            iframe.style.pointerEvents = 'auto';
        }, 66); // Delay of 66ms corresponds to ~15fps
    }, false);

    // Enable pointer events after clicking on the video
    iframe.addEventListener('click', function() {
        iframe.style.pointerEvents = 'auto';
    });
});
