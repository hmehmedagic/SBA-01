function changeImage(imageId) {

    // Show the hidden-gif-container corresponding to the imageId
    var hiddenContainer = document.getElementById(imageId);
    if (hiddenContainer) {

        // Get the header and image from the hidden container
        var header = hiddenContainer.querySelector('.hidden-gif-text');
        var image = hiddenContainer.querySelector('.skill-gif');

        // Populate the skill-gif-container with the content
        var placeholderHeader = document.getElementById('placeholder-header');
        var placeholderImage = document.getElementById('placeholder-image');
        placeholderHeader.textContent = header.textContent;
        placeholderImage.src = image.src;
    }
}