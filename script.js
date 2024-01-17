document.addEventListener('DOMContentLoaded', function() {
    var iframe = document.querySelector('.youtube-container iframe');

    // This function is called when the iframe is clicked
    function onIframeClick() {
        // We check if pointer-events are already enabled
        // If they are not, we enable them so the video can be interacted with
        // If they are, we disable them to allow scrolling
        if (iframe.style.pointerEvents === 'none') {
            iframe.style.pointerEvents = 'auto';
        } else {
            iframe.style.pointerEvents = 'none';
        }
    }

    // We add an event listener to the iframe
    // When the iframe is clicked, we call the onIframeClick function
    iframe.addEventListener('click', onIframeClick);

    // When the user scrolls, we disable pointer-events to ensure scrolling is possible
    window.addEventListener('scroll', function() {
        iframe.style.pointerEvents = 'none';
    });
});
