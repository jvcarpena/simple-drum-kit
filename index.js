const allDrums = document.querySelectorAll(".drum"); // Array of drums.

// Detecting Button Press
for (let i = 0; i < allDrums.length; i++) {
    allDrums[i].addEventListener("click", function () {
        const buttonInnerHtml = this.innerHTML; // Return the letter of the drum that was clicked.
        drumKey(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function (event) {
    const charPressed = event.key; // Return the letter that was pressed.
    console.log(charPressed);
    drumKey(charPressed);
    buttonAnimation(charPressed);
});

// Function to create sound by using the button that was clicked or key that was pressed.
function drumKey(charOrButton) {
    switch (charOrButton) {
        case "w":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            const crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            const kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(charOrButton);
    }
}

function buttonAnimation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);

    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
