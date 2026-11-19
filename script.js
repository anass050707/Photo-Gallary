// Function to update the main image div when hovering over a thumbnail
function upDate(previewPic) {
    // Log to the console to ensure the event is firing
    console.log("Event Triggered!");
    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    // Get the div with the id 'image'
    let imageDiv = document.getElementById("image");

    // Update the text to the alt text of the hovered image
    imageDiv.innerHTML = previewPic.alt;

    // Update the background image to the src of the hovered image
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Function to reset the main image div when the mouse leaves the thumbnail
function undo() {
    // Get the div with the id 'image'
    let imageDiv = document.getElementById("image");

    // Reset the text back to the original message
    imageDiv.innerHTML = "Hover over an image below to display here.";

    // Reset the background image to nothing
    imageDiv.style.backgroundImage = "url('')";
}