document.addEventListener('DOMContentLoaded', function() {
    var iframe = document.querySelector('.youtube-container iframe');
    var startY;

    // Detect start of touch
    iframe.addEventListener('touchstart', function(event) {
        startY = event.touches[0].pageY;
    }, {passive: true});

    // Detect end of touch
    iframe.addEventListener('touchend', function(event) {
        var endY = event.changedTouches[0].pageY;

        // Check if the touch was more of a tap than a swipe
        if (Math.abs(startY - endY) < 10) {
            // It was a tap, enable pointer-events temporarily
            iframe.style.pointerEvents = 'auto';

            // Use a timeout to reset pointer-events to none after a short period
            setTimeout(function() {
                iframe.style.pointerEvents = 'none';
            }, 500); // Adjust the timeout to your preference
        }
    }, {passive: true});
});

